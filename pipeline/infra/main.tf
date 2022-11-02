terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region     = var.DEFAULT_REGION
  access_key = var.AWS_ACCESS_KEY_ID
  secret_key = var.AWS_SECRET_ACCESS_KEY
}

resource "aws_key_pair" "deployer" {
  key_name   = "gitlab-devops"
  public_key = var.SSH_PUBLIC_KEY
}

