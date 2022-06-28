#
# Copyright (c) 2022 Airbyte, Inc., all rights reserved.
#


import sys

from airbyte_cdk.entrypoint import launch
from source_http_api_test import SourceHttpApiTest

if __name__ == "__main__":
    source = SourceHttpApiTest()
    launch(source, sys.argv[1:])
