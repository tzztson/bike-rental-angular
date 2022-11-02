resource "aws_instance" "pro_backend" {
  # Ubuntu 22.04 jammy
  ami           = "ami-030802ad6e5ffb009"
  instance_type = "t2.small"

  key_name               = "gitlab-devops"
  vpc_security_group_ids = [aws_security_group.pro_backend_sg.id]

  tags = {
    Name = "overpaper_backend_prod"
  }

  # # provision server
  # connection {
  #   type        = "ssh"
  #   user        = "ubuntu"
  #   password    = ""
  #   host        = aws_instance.pro_backend.public_ip
  #   private_key = file("C:/Users/Rasjaad/.ssh/gitlab-runner-doitbig")
  # }

  # provisioner "remote-exec" {
  #   inline = [
  #     "sudo apt-get -y update",
  #     "curl -sSL get.docker.com | sh",
  #     "mkdir docker-compose",
  #     "sudo usermod -aG docker $USER",
  #   ]
  # }

  # provisioner "file" {
  #   source      = "pipeline/server_config/pro/nginx.conf"
  #   destination = "~/docker-compose/nginx.conf"
  # }

  # provisioner "file" {
  #   source      = "pipeline/server_config/pro/nginx.conf"
  #   destination = "~/docker-compose/nginx.conf"
  # }

  # provisioner "remote-exec" {
  #   inline = [
  #     "cd docker-compose",
  #     "docker compose up -d",
  #     "sudo docker network create front"
  #   ]
  # }
}

resource "aws_security_group" "pro_backend_sg" {
  name        = "allow_tls"
  description = "Allow TLS inbound traffic"

  ingress {
    description      = "Allow http"
    from_port        = 22
    to_port          = 22
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description      = "Allow http"
    from_port        = 80
    to_port          = 80
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description      = "TLS from VPC"
    from_port        = 443
    to_port          = 443
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }

  tags = {
    Name = "overpaper_pro_backend_sg"
  }
}

# add Elastic IP
resource "aws_eip" "pro_backend_ip" {
  instance = aws_instance.pro_backend.id

  tags = {
    Name = "overpaper_pro_backend_ip"
  }
}

resource "aws_eip_association" "eip_assoc" {
  instance_id   = aws_instance.pro_backend.id
  allocation_id = aws_eip.pro_backend_ip.id
}

# prod database
resource "aws_db_instance" "pro_database" {
  identifier          = "pro-overpaper"
  allocated_storage   = 15
  engine              = "mysql"
  instance_class      = "db.t3.micro"
  db_name             = "overpaper"
  username            = var.RDS_DATABASE_USER
  password            = var.RDS_DATABASE_PASSWORD
  skip_final_snapshot = true
  apply_immediately   = true
  publicly_accessible = true

  tags = {
    Name = "overpaper_backend_db"
  }
}

resource "aws_s3_bucket" "pro_frontend" {
  bucket = var.S3_WEBSITE_BUCKET_ID
  acl    = "public-read"

  # Comment the following line if you don't want Terraform to destroy the bucket ...
  force_destroy = true

  website {
    index_document = "index.html"
    error_document = "error.html"

    routing_rules = <<EOF
[{
    "Condition": {
        "KeyPrefixEquals": "docs/"
    },
    "Redirect": {
        "ReplaceKeyPrefixWith": "documents/"
    }
}]
EOF
  }


  lifecycle {
    ignore_changes = [tags]
  }
}

resource "aws_s3_bucket_policy" "pro_frontend_bucket_policy" {
  bucket = aws_s3_bucket.pro_frontend.id

  policy = <<POLICY
{
  "Version": "2012-10-17",
  "Id": "PolicyForWebsiteEndpointsPublicContent",
  "Statement": [
    {
      "Sid": "PublicRead",
      "Effect": "Allow",
      "Principal": "*",
      "Action": [
        "s3:GetObject"
      ],
      "Resource": [
        "${aws_s3_bucket.pro_frontend.arn}/*",
        "${aws_s3_bucket.pro_frontend.arn}"
      ]
    }
  ]
}
POLICY
}

resource "aws_cloudfront_distribution" "pro_overpaper_demo_s3_distribution" {
  origin {
    domain_name = aws_s3_bucket.pro_frontend.bucket_regional_domain_name
    origin_id   = "S3-frontend-overpaper"
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  aliases = ["demo.overpaper.com"]

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3-frontend-overpaper"

    forwarded_values {
      query_string = true

      cookies {
        forward = "all"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 60
    max_ttl                = 60
  }

  custom_error_response {
    error_code         = 403
    response_code      = 200
    response_page_path = "/index.html"
  }

  custom_error_response {
    error_code         = 404
    response_code      = 200
    response_page_path = "/index.html"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  tags = {
    Name = "pro-overpaper-demo"
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }
}
