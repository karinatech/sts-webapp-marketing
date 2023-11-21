#! /bin/bash

#if [[ -z "$AWS_ACCESS_KEY_ID" || -z "$AWS_SECRET_ACCESS_KEY" || -z "$AWS_REGION" ]]; then
#  echo "ERROR: One or more required AWS environment variables are not set."
#  echo "Please set the following environment variables: AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, and AWS_REGION"
#  exit 1
#fi
#
#yarn run build
aws s3 cp ./dist/xavro s3://sts-web-app-prod --recursive --profile kari-personal
aws cloudfront create-invalidation --distribution-id E1HJ8EBXZ4NS9J --paths '/*' --profile kari-personal
