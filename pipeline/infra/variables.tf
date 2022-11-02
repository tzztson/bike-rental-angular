variable "AWS_ACCESS_KEY_ID" {
  type = string
}

variable "AWS_SECRET_ACCESS_KEY" {
  type = string
}

variable "DEFAULT_REGION" {
  type    = string
  default = "eu-west-1"
}

variable "RDS_DATABASE_USER" {
  type = string
}

variable "RDS_DATABASE_PASSWORD" {
  type = string
}

variable "SSH_PUBLIC_KEY" {
  type = string
}

variable "S3_WEBSITE_BUCKET_ID" {
  type = string
}
