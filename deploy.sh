#!/bin/bash
ng build
aws s3 cp ./dist/my-blog-space s3://my-blog-space --recursive