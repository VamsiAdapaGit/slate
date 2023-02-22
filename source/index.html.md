---
title: IFAD API docs
language_tabs:
  - ruby: Ruby
  - python: Python
  - shell: Shell
  - javascript: Javascript
  - http: HTTP
language_clients:
  - ruby: ""
  - python: ""
  - shell: ""
  - javascript: ""
  - http: ""
toc_footers: []
includes: 
  - errors
search: true
highlight_theme: darkula
headingLevel: 2
code_clipboard: true
---

<!-- Generator: Widdershins v4.0.1 -->
<br>
<br>
<br>
# Welcome 

<font size="3">
The IFAD APIs have been crafted as <span style="color:#0F75D4">**RESTful APIs**</span> that follow an intuitive resource-oriented URL structure and accept <span style="color:#0F75D4">**form-encoded request**</span> bodies, returning <span style="color:#0F75D4">**JSON-encoded responses**</span>. Incorporating standard HTTP response codes, authentication, and verbs, these APIs are uncomplicated and easily navigable for developers, facilitating their integration into various applications.

</font>
<font size="3">
It's important to note that the IFAD APIs are <span style="color:#0F75D4">**rate-limited per application**</span>, so developers should be mindful of their usage. All API calls should be <span style="color:#0F75D4">**authenticated**</span> to ensure secure access to data.

</font>
<font size="3">
We're excited to see what you can build with this valuable information. To help you get started, we've provided <span style="color:#0F75D4">**code samples in a variety of languages**</span>. Take a look at the sample code to jumpstart your development efforts!

</font>
# Authentication 

> Code samples

```ruby
require 'net/http'
require 'uri'
require 'json'

def generate_bearer_token(api_key, api_secret)
  uri = URI.parse("https://api.example.com/token")

  https = Net::HTTP.new(uri.host, uri.port)
  https.use_ssl = true

  request = Net::HTTP::Post.new(uri.path)
  request.basic_auth(api_key, api_secret)
  request.set_form_data({
    "grant_type" => "client_credentials"
  })

  response = https.request(request)
  body = JSON.parse(response.body)

  return body["access_token"]
end

# Example usage
api_key = "your_api_key"
api_secret = "your_api_secret"
bearer_token = generate_bearer_token(api_key, api_secret)
puts "Bearer token: #{bearer_token}"

```

```python
import requests

url = 'https://example.com/oauth/token'
data = {
    'grant_type': 'client_credentials',
    'client_id': 'your_client_id',
    'client_secret': 'your_client_secret'
}

response = requests.post(url, data=data)
access_token = response.json()['access_token']

print(access_token)

```

```shell
#!/bin/bash

# Set the token endpoint URL
TOKEN_URL="https://example.com/oauth/token"

# Set the client ID and secret
CLIENT_ID="your_client_id"
CLIENT_SECRET="your_client_secret"

# Encode the credentials as base64
CREDENTIALS=$(printf "%s:%s" "$CLIENT_ID" "$CLIENT_SECRET" | base64)

# Make a POST request to the token endpoint with the client credentials
RESPONSE=$(curl -s -X POST \
  -H "Authorization: Basic $CREDENTIALS" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=client_credentials" \
  "$TOKEN_URL")

# Extract the access token from the response
ACCESS_TOKEN=$(echo "$RESPONSE" | jq -r '.access_token')

# Print the access token
echo "$ACCESS_TOKEN"

```

```javascript

const axios = require('axios');

const getToken = async () => {
  const API_KEY = 'YOUR_API_KEY';
  const API_SECRET = 'YOUR_API_SECRET';
  const encodedKey = Buffer.from(`${API_KEY}:${API_SECRET}`).toString('base64');

  const config = {
    headers: {
      Authorization: `Basic ${encodedKey}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };

  const { data } = await axios.post('https://api.example.com/oauth/token', 'grant_type=client_credentials', config);

  return data.access_token;
};

// Example usage
const token = await getToken();
console.log(token);

```

```http
GET https://api.ifad.org/.... HTTP/1.1

Followed by adding the bearer token

```

<font size="3">
To ensure secure access to the IFAD API, we use <span style="color:#0F75D4">**API keys to authenticate**</span> requests. You can manage and view your API keys within the IFAD Developer Portal.

</font>
<font size="3">
It's important to keep your API keys secure since they carry many privileges. We strongly advise against sharing your secret API keys in publicly accessible areas like client-side code or GitHub.

</font>
<font size="3">
While we <span style="color:#0F75D4">**currently support basic authentication**</span>, we <span style="color:#0F75D4">**highly recommend using OAuth2.0**</span> for authentication purposes. In the future, we plan to <span style="color:#0F75D4">**enforce the use of OAuth2.0**</span> for enhanced security.

</font>
<font size="3">
All API requests must be made over HTTPS, as calls made over plain HTTP will fail. Requests that aren't authenticated will also fail.

</font>
<font size="3">
To request access to the IFAD API, follow these steps:

</font>

- Register or log in to the **[IFAD Developer Portal](https://eu1.anypoint.mulesoft.com/exchange/portals/ifad/ "IFAD Developer Portal")**.
- Request access to the specific API you want to use.
- Register or use an existing application within the Developer Portal while requesting access.
- Choose an SLA tier that follows an approval process based on the type of SLA you've requested.
- Once access has been approved, you can use the API keys provided to access the API.


<h1 id="api-v1-endpoints">IFAD Projects</h1>

## Projects

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/vnd.api+json'
}

result = RestClient.get 'https://api.ifad.org/v1/projects',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/vnd.api+json'
}

r = requests.get('https://api.ifad.org/v1/projects', headers = headers)

print(r.json())

```

```shell
# You can also use wget
curl -X GET https://api.ifad.org/v1/projects \
  -H 'Accept: application/vnd.api+json'

```

```javascript

const headers = {
  'Accept':'application/vnd.api+json'
};

fetch('https://api.ifad.org/v1/projects',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```http
GET https://api.ifad.org/v1/projects HTTP/1.1

Accept: application/vnd.api+json

```

> Example responses


```json
{
  "data": [
    {
      "id": "string",
      "type": "string",
      "attributes": {
        "id": "string",
        "internal_project_id": "string",
        "title": "string",
        "description": "string",
        "reti_id": "string",
        "loaded_at": "string",
        "valid_until": "string",
        "approval_actual_date": "string",
        "approval_planned_date": "string",
        "closing_date_actual": "string",
        "closing_date_planned": "string",
        "manager_name": "string",
        "sector_id": "string",
        "status_id": "string",
        "type": "string",
        "type_description": "string",
        "country_code": "string",
        "country_slug": "string",
        "country_title": "string",
        "kind": "string",
        "kind_description": "string",
        "latitude": "string",
        "longitude": "string",
        "created_at": "string",
        "updated_at": "string"
      },
      "relationships": {
        "financial_instruments": {
          "data": [
            {
              "id": "string",
              "type": "string"
            }
          ]
        },
        "objectives": {
          "data": [
            {
              "id": "string",
              "type": "string"
            }
          ]
        },
        "transactions": {
          "data": [
            {
              "id": "string",
              "type": "string"
            }
          ]
        }
      },
      "links": {
        "self": "string"
      }
    }
  ],
  "included": [
    {}
  ]
}
```

The <span style="color:#0F75D4">**IFAD Projects API**</span> is a powerful tool that enables developers to programmatically access data on <span style="color:#0F75D4">**IFAD-funded projects and co-financing initiatives**</span>. With this API, developers can retrieve detailed information on <span style="color:#0F75D4">**project descriptions, locations, objectives, budgets, outcomes, funding sources, and implementing partners**<span>.

The API offers multiple endpoints that allow for flexible querying of data with different parameters and returns results in JSON format. It is designed to be user-friendly and can be easily integrated with a wide range of programming languages and tools.

By utilizing the IFAD Projects API, developers can contribute to IFAD's mission of reducing rural poverty and promoting sustainable development. We encourage developers to explore the API and uncover the valuable insights it provides.

### list projects


`GET /v1/projects`

The "List projects" endpoint provides access to a comprehensive list of available projects, each represented by a unique identifier (<span style="color:#0F75D4">`ID`</span>) and basic information such as <span style="color:#0F75D4">`title`</span>, <span style="color:#0F75D4">`country`</span>, and coordinates(<span style="color:#0F75D4">`latitude, longitude`</span>). The endpoint also presents project associated entities like financial instruments, transactions and documents.

To retrieve additional pages of project results, developers can make use of the "page" parameter. For example,  <span style="color:#0F75D4">`v1/projects?page[limit]=40&page[offset]=100`</span> , the API will return the 40 pages of project results. This functionality enables developers to efficiently navigate through large sets of project data.

 
<h3 id="list-projects-parameters">Parameters</h3>



|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|object|false|none|
|page|query|object|false|none|
|include|query|array[string]|false|none|
|sort|query|array[string]|false|none|



### show project

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'json'
}

result = RestClient.get 'https://api.ifad.org/v1/projects/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'json'
}

r = requests.get('https://api.ifad.org/v1/projects/{id}', headers = headers)

print(r.json())

```

```shell
# You can also use wget
curl -X GET https://api.ifad.org/v1/projects/{id} \
  -H 'Accept: json'

```

```javascript

const headers = {
  'Accept':'json'
};

fetch('https://api.ifad.org/v1/projects/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```http
GET https://api.ifad.org/v1/projects/{id} HTTP/1.1

Accept: json

```

`GET /v1/projects/{id}`

The IFAD Projects API is a tool that provides programmatic access to data on IFAD-funded projects and co-financing initiatives.
      Developers can use the API to retrieve detailed information on project descriptions, locations, objectives, budgets, outcomes, 
      funding sources, and implementing partners. The API has various endpoints that allow developers 
      to query the data using different parameters and retrieve the results in JSON format. 
      The IFAD Projects API is designed to be easy to use and can be integrated with a variety of programming languages and tools. 
      Developers can use the API to create custom applications, dashboards, and other tools that enable users to explore and analyze IFAD's project
      data in innovative ways. By leveraging the API, developers can help promote IFAD's mission to reduce rural poverty and promote sustainable 
      development. We encourage developers to explore the IFAD Projects API and discover the valuable insights it can provide. 
      By leveraging this API, developers can help promote greater transparency and accountability in IFAD's project and co-financing activities, 
      and contribute to more effective and efficient use of development resources.

<h3 id="show-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id|



## Documents

### list documents

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/vnd.api+json'
}

result = RestClient.get 'https://api.ifad.org/v1/projects/{project_id}/documents',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/vnd.api+json'
}

r = requests.get('https://api.ifad.org/v1/projects/{project_id}/documents', headers = headers)

print(r.json())

```

```shell
# You can also use wget
curl -X GET https://api.ifad.org/v1/projects/{project_id}/documents \
  -H 'Accept: application/vnd.api+json'

```

```javascript

const headers = {
  'Accept':'application/vnd.api+json'
};

fetch('https://api.ifad.org/v1/projects/{project_id}/documents',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```http
GET https://api.ifad.org/v1/projects/{project_id}/documents HTTP/1.1

Accept: application/vnd.api+json

```

`GET /v1/projects/{project_id}/documents`

      The International Fund for Agricultural Development (IFAD) is a specialized agency of the United Nations that works to
      alleviate poverty and hunger in developing countries through financing, policy advice, and technical assistance for
      agricultural and rural development projects. IFAD project documents are a type of document that outlines the details
      of a specific agricultural or rural development project that is being funded by IFAD. These documents typically include
      information on the goals and objectives of the project, the targeted beneficiaries, the budget and financing plan,
      the activities and interventions that will be implemented, and the expected results and impacts of the project.
      Other information that may be included in IFAD project documents includes the timeline for implementing the project,
      the roles and responsibilities of different stakeholders, and the monitoring and evaluation plan for tracking
      the progress and success of the project.
    

<h3 id="list-documents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|project_id|

> Example responses

```json
{
  "data": [
    {
      "id": "string",
      "type": "string",
      "attributes": {
        "title": "string",
        "description": "string",
        "kind": "string",
        "categories": [
          "string"
        ],
        "country": "string",
        "format": "string",
        "language": "string",
        "url": "string",
        "created_at": "string",
        "updated_at": "string"
      },
      "relationships": {
        "projects": {
          "data": [
            {
              "id": "string",
              "type": "string"
            }
          ]
        }
      },
      "links": {
        "self": "string"
      }
    }
  ]
}
```



## Organisation Documents

### list organisation documents

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/vnd.api+json'
}

result = RestClient.get 'https://api.ifad.org/v1/organisation-documents',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/vnd.api+json'
}

r = requests.get('https://api.ifad.org/v1/organisation-documents', headers = headers)

print(r.json())

```

```shell
# You can also use wget
curl -X GET https://api.ifad.org/v1/organisation-documents \
  -H 'Accept: application/vnd.api+json'

```

```javascript

const headers = {
  'Accept':'application/vnd.api+json'
};

fetch('https://api.ifad.org/v1/organisation-documents',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```http
GET https://api.ifad.org/v1/organisation-documents HTTP/1.1

Accept: application/vnd.api+json

```

`GET /v1/organisation-documents`

Organisation Documents

> Example responses


```json
{
  "data": [
    {
      "id": "string",
      "type": "string",
      "attributes": {
        "title": "string",
        "description": "string",
        "kind": "string",
        "categories": [
          "string"
        ],
        "country": "string",
        "format": "string",
        "language": "string",
        "url": "string",
        "created_at": "string",
        "updated_at": "string"
      },
      "relationships": {
        "projects": {
          "data": [
            {
              "id": "string",
              "type": "string"
            }
          ]
        }
      },
      "links": {
        "self": "string"
      }
    }
  ]
}
```


### show organization document

> Code samples

```ruby
require 'rest-client'
require 'json'

result = RestClient.get 'https://api.ifad.org/v1/organisation-documents/{id}',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.get('https://api.ifad.org/v1/organisation-documents/{id}')

print(r.json())

```

```shell
# You can also use wget
curl -X GET https://api.ifad.org/v1/organisation-documents/{id}

```

```javascript

fetch('https://api.ifad.org/v1/organisation-documents/{id}',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```http
GET https://api.ifad.org/v1/organisation-documents/{id} HTTP/1.1

```

`GET /v1/organisation-documents/{id}`

<h3 id="show-organization-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id|


## Objectives

### list objectives

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'json'
}

result = RestClient.get 'https://api.ifad.org/v1/projects/{project_id}/objectives',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'json'
}

r = requests.get('https://api.ifad.org/v1/projects/{project_id}/objectives', headers = headers)

print(r.json())

```

```shell
# You can also use wget
curl -X GET https://api.ifad.org/v1/projects/{project_id}/objectives \
  -H 'Accept: json'

```

```javascript

const headers = {
  'Accept':'json'
};

fetch('https://api.ifad.org/v1/projects/{project_id}/objectives',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```http
GET https://api.ifad.org/v1/projects/{project_id}/objectives HTTP/1.1

Accept: json

```

`GET /v1/projects/{project_id}/objectives`

The objectives of IFAD projects are the specific goals or outcomes that are aimed to achieve through the implementation of agricultural and rural development projects in developing countries. These objectives may vary depending on the specific focus and context of each project, but they typically fall into one or more of the following categories:
    1. Poverty reduction: Many IFAD projects aim to reduce poverty by increasing the income, assets, and opportunities of the poorest and most vulnerable groups in the targeted communities. This may be achieved through a range of activities, such as improving access to markets, credit, and other financial services, promoting the adoption of new technologies and practices, and strengthening the capacity of smallholder farmers and rural enterprises.
    2. Food security: IFAD projects often aim to improve food security by increasing the productivity and profitability of smallholder farming systems, promoting the diversification of agricultural activities, and strengthening the capacity of rural communities to cope with shocks and stresses.
    3. Economic growth: IFAD projects may also seek to support economic growth in the targeted communities by promoting the development of new economic opportunities and activities, such as agribusiness development, rural tourism, and the processing and marketing of agricultural products.
    4. Environmental sustainability: Many IFAD projects aim to support the conservation of natural resources and the promotion of sustainable land and water management practices, in order to protect the long-term viability of agricultural and rural systems.
    

<h3 id="list-objectives-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|project_id|

> Example responses


```json
{
  "data": [
    {
      "id": "string",
      "type": "string",
      "attributes": {
        "sequence_no": 0,
        "title": "string",
        "description": "string",
        "reti_id": "string",
        "loaded_at": "string",
        "valid_until": "string",
        "created_at": "string",
        "updated_at": "string"
      },
      "relationships": {
        "project": {
          "data": {
            "id": "string",
            "type": "string"
          }
        }
      },
      "links": {
        "self": "string"
      }
    }
  ]
}
```


### show objective

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'json'
}

result = RestClient.get 'https://api.ifad.org/v1/projects/{project_id}/objectives/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'json'
}

r = requests.get('https://api.ifad.org/v1/projects/{project_id}/objectives/{id}', headers = headers)

print(r.json())

```

```shell
# You can also use wget
curl -X GET https://api.ifad.org/v1/projects/{project_id}/objectives/{id} \
  -H 'Accept: json'

```

```javascript

const headers = {
  'Accept':'json'
};

fetch('https://api.ifad.org/v1/projects/{project_id}/objectives/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```http
GET https://api.ifad.org/v1/projects/{project_id}/objectives/{id} HTTP/1.1

Accept: json

```

`GET /v1/projects/{project_id}/objectives/{id}`

The objectives of IFAD projects are the specific goals or outcomes that are aimed to achieve through the implementation of agricultural and rural development projects in developing countries. These objectives may vary depending on the specific focus and context of each project, but they typically fall into one or more of the following categories:
    1. Poverty reduction: Many IFAD projects aim to reduce poverty by increasing the income, assets, and opportunities of the poorest and most vulnerable groups in the targeted communities. This may be achieved through a range of activities, such as improving access to markets, credit, and other financial services, promoting the adoption of new technologies and practices, and strengthening the capacity of smallholder farmers and rural enterprises.
    2. Food security: IFAD projects often aim to improve food security by increasing the productivity and profitability of smallholder farming systems, promoting the diversification of agricultural activities, and strengthening the capacity of rural communities to cope with shocks and stresses.
    3. Economic growth: IFAD projects may also seek to support economic growth in the targeted communities by promoting the development of new economic opportunities and activities, such as agribusiness development, rural tourism, and the processing and marketing of agricultural products.
    4. Environmental sustainability: Many IFAD projects aim to support the conservation of natural resources and the promotion of sustainable land and water management practices, in order to protect the long-term viability of agricultural and rural systems.
    

<h3 id="show-objective-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|project_id|
|id|path|string|true|id|




## Financial Instruments

### list financial instruments

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'json'
}

result = RestClient.get 'https://api.ifad.org/v1/projects/{project_id}/financial-instruments',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'json'
}

r = requests.get('https://api.ifad.org/v1/projects/{project_id}/financial-instruments', headers = headers)

print(r.json())

```

```shell
# You can also use wget
curl -X GET https://api.ifad.org/v1/projects/{project_id}/financial-instruments \
  -H 'Accept: json'

```

```javascript

const headers = {
  'Accept':'json'
};

fetch('https://api.ifad.org/v1/projects/{project_id}/financial-instruments',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```http
GET https://api.ifad.org/v1/projects/{project_id}/financial-instruments HTTP/1.1

Accept: json

```

`GET /v1/projects/{project_id}/financial-instruments`

IFAD project financial instruments can take various forms, including loans or grants and are designed to support the implementation of projects that aim to reduce poverty and improve food security in the targeted communities.
    IFAD loans are financial instruments that are provided to recipient countries or other borrowers on a commercial or concessional basis to finance the implementation of agricultural and rural development projects. These loans typically have a fixed interest rate and a repayment period of several years.
    IFAD grants are financial instruments that are provided to recipient countries or other borrowers on a non-reimbursable basis to finance the implementation of agricultural and rural development projects. These grants are typically used to cover project-related costs that cannot be financed through other means, such as technical assistance, capacity building, and institutional strengthening.
    

<h3 id="list-financial-instruments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|project_id|



```json
{
  "data": [
    {
      "id": "string",
      "type": "string",
      "attributes": {
        "title": "string",
        "description": "string",
        "reti_id": "string",
        "loaded_at": "string",
        "valid_until": "string",
        "approval_date": "string",
        "disbursed_amount": 0,
        "financed_amount": 0,
        "financier_code": "string",
        "latest_disbursement_date": "string",
        "loan_grant_type": "string",
        "product_currency_code": "string",
        "created_at": "string",
        "updated_at": "string"
      },
      "relationships": {
        "project": {
          "data": {
            "id": "string",
            "type": "string"
          }
        }
      },
      "links": {
        "self": "string"
      }
    }
  ]
}
```


### show financial instrument

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'json'
}

result = RestClient.get 'https://api.ifad.org/v1/projects/{project_id}/financial-instruments/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'json'
}

r = requests.get('https://api.ifad.org/v1/projects/{project_id}/financial-instruments/{id}', headers = headers)

print(r.json())

```

```shell
# You can also use wget
curl -X GET https://api.ifad.org/v1/projects/{project_id}/financial-instruments/{id} \
  -H 'Accept: json'

```

```javascript

const headers = {
  'Accept':'json'
};

fetch('https://api.ifad.org/v1/projects/{project_id}/financial-instruments/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```http
GET https://api.ifad.org/v1/projects/{project_id}/financial-instruments/{id} HTTP/1.1

Accept: json

```

`GET /v1/projects/{project_id}/financial-instruments/{id}`

IFAD project financial instruments can take various forms, including loans or grants and are designed to support the implementation of projects that aim to reduce poverty and improve food security in the targeted communities.
    IFAD loans are financial instruments that are provided to recipient countries or other borrowers on a commercial or concessional basis to finance the implementation of agricultural and rural development projects. These loans typically have a fixed interest rate and a repayment period of several years.
    IFAD grants are financial instruments that are provided to recipient countries or other borrowers on a non-reimbursable basis to finance the implementation of agricultural and rural development projects. These grants are typically used to cover project-related costs that cannot be financed through other means, such as technical assistance, capacity building, and institutional strengthening.
    

<h3 id="show-financial-instrument-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|project_id|
|id|path|string|true|id|



## Transactions

### list transactions

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'json'
}

result = RestClient.get 'https://api.ifad.org/v1/projects/{project_id}/transactions',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'json'
}

r = requests.get('https://api.ifad.org/v1/projects/{project_id}/transactions', headers = headers)

print(r.json())

```

```shell
# You can also use wget
curl -X GET https://api.ifad.org/v1/projects/{project_id}/transactions \
  -H 'Accept: json'

```

```javascript

const headers = {
  'Accept':'json'
};

fetch('https://api.ifad.org/v1/projects/{project_id}/transactions',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```http
GET https://api.ifad.org/v1/projects/{project_id}/transactions HTTP/1.1

Accept: json

```

`GET /v1/projects/{project_id}/transactions`

IFAD project transactions are financial transactions involve the disbursement of IFAD funds 
      to the recipient country or other borrower. Disbursements may be made in the form of loans or grants and may be used to cover a wide range of project-related expenses, including personnel costs, equipment purchases, and the construction of infrastructure.
    

<h3 id="list-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|project_id|

> Example responses

```json
{
  "data": [
    {
      "id": "string",
      "type": "string",
      "attributes": {
        "reti_id": "string",
        "aid_type": "string",
        "currency": "string",
        "description": "string",
        "disbursement_channel_code": 0,
        "finance_type": 0,
        "flow_type": 0,
        "narrative": "string",
        "transaction_code": 0,
        "transaction_date": "string",
        "transaction_type": "string",
        "value": 0,
        "value_date": "string",
        "created_at": "string",
        "updated_at": "string"
      },
      "relationships": {
        "project": {
          "data": {
            "id": "string",
            "type": "string"
          }
        }
      },
      "links": {
        "self": "string"
      }
    }
  ]
}
```

### show transaction

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'json'
}

result = RestClient.get 'https://api.ifad.org/v1/projects/{project_id}/transactions/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'json'
}

r = requests.get('https://api.ifad.org/v1/projects/{project_id}/transactions/{id}', headers = headers)

print(r.json())

```

```shell
# You can also use wget
curl -X GET https://api.ifad.org/v1/projects/{project_id}/transactions/{id} \
  -H 'Accept: json'

```

```javascript

const headers = {
  'Accept':'json'
};

fetch('https://api.ifad.org/v1/projects/{project_id}/transactions/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```http
GET https://api.ifad.org/v1/projects/{project_id}/transactions/{id} HTTP/1.1

Accept: json

```

`GET /v1/projects/{project_id}/transactions/{id}`

IFAD project transactions are financial transactions involve the disbursement of IFAD funds 
      to the recipient country or other borrower. Disbursements may be made in the form of loans or grants and may be used to cover a wide range of project-related expenses, including personnel costs, equipment purchases, and the construction of infrastructure.
    

<h3 id="show-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|project_id|
|id|path|string|true|id|









<h1 id="core-banking">Core Banking</h1>


A core banking API provides programmatic access to the core banking system, which is the central system that handles banking activities like loans and grants. In addition, this API can be used to access historical currency exchange rates. Over all, the core banking API offers a powerful set of tools that can help developers create innovative financial services and applications. By leveraging this API, developers can unlock a considerable potential of the core banking system. Additionally, the API can help improve operational efficiency and reduce costs associated with traditional processes.

## Exchange Rates

### List currency pairs.

<a id="opIdpairs_pairs_get"></a>

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/pairs',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/pairs', headers = headers)

print(r.json())

```

```shell
# You can also use wget
curl -X GET /pairs \
  -H 'Accept: application/json'

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/pairs',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```http
GET /pairs HTTP/1.1

Accept: application/json

```

`GET /pairs`

The list currency pairs endpoint allows you to easily retrieve a comprehensive list of all available currency pairs, for which exchange rates are stored in core banking system. With the help of this endpoint, you can efficiently retrieve the information you need and build customized solutions that require currency pair information.

> Example responses


```json
[
  {
    "branch_code": "string",
    "from_currency": "string",
    "to_currency": "string"
  }
]
```

<h3 id="list-currency-pairs.-responseschema">Response Schema</h3>

Status Code **200**

*Response Pairs Pairs Get*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Response Pairs Pairs Get|[[Pair](#schemapair)]|false|none|[Currency pair.]|
|» Pair|[Pair](#schemapair)|false|none|Currency pair.|
|»» branch_code|string|true|none|Flexcube branch code (000-head office for static maintenance and 001 - all transactions)|
|»» from_currency|string|true|none|The source currency code (ISO 4217) for the exchange rate. (e.g. USD, EUR, GBP, etc.)|
|»» to_currency|string|true|none|The target currency code (ISO 4217) for the exchange rate. (e.g. USD, EUR, GBP, etc.)|


### Show exchange rates.

<a id="opIdrate_values_rate_values_get"></a>

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/rate_values',
  params: {
  'from_currency' => 'string',
'to_currency' => 'string',
'rate_date' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/rate_values', params={
  'from_currency': 'USD',  'to_currency': 'EUR',  'rate_date': '01/01/2023'
}, headers = headers)

print(r.json())

```

```shell
# You can also use wget
curl -X GET /rate_values?from_currency=USD&to_currency=EUR&rate_date=01%2F01%2F2023 \
  -H 'Accept: application/json'

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/rate_values?from_currency=USD&to_currency=EUR&rate_date=01%2F01%2F2023',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```http
GET /rate_values?from_currency=USD&to_currency=EUR&rate_date=01%2F01%2F2023 HTTP/1.1

Accept: application/json

```

`GET /rate_values`

The exchange rate lookup endpoint allows you to obtain the current exchange rate value for a specific currency pair in core banking system. To retrieve the exchange rate, simply provide the source currency in the 'from currency' field and the target currency in the 'to currency' field. It's important to note that the endpoint uses the mid rate for all transactions, ensuring consistency across all transactions that reference the given currency pair. By leveraging this endpoint, you can easily access real-time exchange rate information and build customized applications or tools that require this data.

<h3 id="show-exchange-rates.-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|from_currency|query|string|true|From Currency|
|to_currency|query|string|true|To Currency|
|rate_date|query|string|true|Rate Date|



> Example responses


```json
[
  {
    "branch_code": "string",
    "from_currency": "string",
    "to_currency": "string",
    "mid_rate": 0,
    "buy_rate": 0,
    "sale_rate": 0,
    "rate_date": "2019-08-24T14:15:22Z"
  }
]
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string",
        0
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="show-exchange-rates.-responseschema">Response Schema</h3>

Status Code **200**

*Response Rate Values Rate Values Get*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Response Rate Values Rate Values Get|[[RateValue](#schemaratevalue)]|false|none|[Exchange rate.]|
|» RateValue|[RateValue](#schemaratevalue)|false|none|Exchange rate.|
|»» branch_code|string|true|none|Flexcube branch code (000-head office for static maintenance and 001 - all transactions)|
|»» from_currency|string|true|none|The source currency code (ISO 4217) for the exchange rate. (e.g. USD, EUR, GBP, etc.)|
|»» to_currency|string|true|none|The target currency code (ISO 4217) for the exchange rate. (e.g. USD, EUR, GBP, etc.)|
|»» mid_rate|number|true|none|Mid rate - this rate is used in Flexcube|
|»» buy_rate|number|true|none|none|
|»» sale_rate|number|true|none|none|
|»» rate_date|string(date-time)|true|none|none|



# Schemas
## IFAD API endpoints schemas

<h3 id="tocS_document">document</h3>
<!-- backwards compatibility -->
<a id="schemadocument"></a>
<a id="schema_document"></a>
<a id="tocSdocument"></a>
<a id="tocsdocument"></a>


> Example responses



```json
{
  "attributes": {
    "title": "string",
    "description": "string",
    "kind": "string",
    "categories": [
      "string"
    ],
    "country": "string",
    "format": "string",
    "language": "string",
    "url": "string",
    "created_at": "string",
    "updated_at": "string"
  },
  "relationships": {
    "projects": {
      "data": [
        {
          "id": "string",
          "type": "string"
        }
      ]
    }
  },
  "links": {
    "self": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|none|
|» title|string|true|none|none|
|» description|string¦null|true|none|none|
|» kind|string|true|none|none|
|» categories|[string]|true|none|none|
|» country|string¦null|false|none|none|
|» format|string|true|none|none|
|» language|string|true|none|none|
|» url|string|true|none|none|
|» created_at|string¦null|false|none|none|
|» updated_at|string¦null|false|none|none|
|relationships|object|false|none|none|
|» projects|object|true|none|none|
|»» data|[object]|true|none|none|
|»»» id|string|false|none|none|
|»»» type|string|false|none|none|
|links|object|false|none|none|
|» self|string¦null|true|none|none|

<h3 id="tocS_financial_instrument">financial_instrument</h3>
<!-- backwards compatibility -->
<a id="schemafinancial_instrument"></a>
<a id="schema_financial_instrument"></a>
<a id="tocSfinancial_instrument"></a>
<a id="tocsfinancial_instrument"></a>


> Example responses


```json
{
  "attributes": {
    "title": "string",
    "description": "string",
    "reti_id": "string",
    "loaded_at": "string",
    "valid_until": "string",
    "approval_date": "string",
    "disbursed_amount": 0,
    "financed_amount": 0,
    "financier_code": "string",
    "latest_disbursement_date": "string",
    "loan_grant_type": "string",
    "product_currency_code": "string",
    "created_at": "string",
    "updated_at": "string"
  },
  "relationships": {
    "project": {
      "data": {
        "id": "string",
        "type": "string"
      }
    }
  },
  "links": {
    "self": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|none|
|» title|string|true|none|Lending terms of the financing instrument|
|» description|string|true|none|The source of financing of the financing instrument.|
|» reti_id|string|true|none|Unique 10 digit financing instrument number|
|» loaded_at|string|true|none|The timestamp of the item that is made available to IATI|
|» valid_until|string|true|none|The timestamp until which the item is valid for IATI consumption|
|» approval_date|string|true|none|The date on which the financing instrument was actually approved the Executive Board or IFAD President|
|» disbursed_amount|number|true|none|The total amount disbursed in the denomination currency|
|» financed_amount|number|true|none|The total amount financed for the loan or grant.|
|» financier_code|string|true|none|The source of financing of the financing instrument.|
|» latest_disbursement_date|string¦null|false|none|The date of the most recent disbursement transaction.|
|» loan_grant_type|string|true|none|Identifier to distinguish between a loan and a grant|
|» product_currency_code|string|true|none|Denomination currency of the Loan/Grant|
|» created_at|string|true|none|The timestamp of creation of the item in the object|
|» updated_at|string|true|none|The timestamp of the last update on the item|
|relationships|object|false|none|none|
|» project|object|true|none|none|
|»» data|object|true|none|none|
|»»» id|string|true|none|none|
|»»» type|string|true|none|none|
|links|object|false|none|none|
|» self|string|true|none|none|

<h3 id="tocS_project">project</h3>
<!-- backwards compatibility -->
<a id="schemaproject"></a>
<a id="schema_project"></a>
<a id="tocSproject"></a>
<a id="tocsproject"></a>



> Example responses


```json
{
  "attributes": {
    "id": "string",
    "internal_project_id": "string",
    "title": "string",
    "description": "string",
    "reti_id": "string",
    "loaded_at": "string",
    "valid_until": "string",
    "approval_actual_date": "string",
    "approval_planned_date": "string",
    "closing_date_actual": "string",
    "closing_date_planned": "string",
    "manager_name": "string",
    "sector_id": "string",
    "status_id": "string",
    "type": "string",
    "type_description": "string",
    "country_code": "string",
    "country_slug": "string",
    "country_title": "string",
    "kind": "string",
    "kind_description": "string",
    "latitude": "string",
    "longitude": "string",
    "created_at": "string",
    "updated_at": "string"
  },
  "relationships": {
    "financial_instruments": {
      "data": [
        {
          "id": "string",
          "type": "string"
        }
      ]
    },
    "objectives": {
      "data": [
        {
          "id": "string",
          "type": "string"
        }
      ]
    },
    "transactions": {
      "data": [
        {
          "id": "string",
          "type": "string"
        }
      ]
    }
  },
  "links": {
    "self": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|none|
|» id|string|false|none|Unique identifier of the object.|
|» internal_project_id|string|true|none|The sequential number (10 digits) assigned by PeopleSoft when the project/grant was created. For investment projects, this is different to the Financing Instrument ID. For stand-alone grants, this is also the Financing Instrument.|
|» title|string|true|none|This is a concatenation of Project Name and Project ID<br>          Project_id :  The sequential number (10 digits) assigned by PeopleSoft when the project/grant was created. For investment projects, this is different to the Financing Instrument ID. For stand-alone grants, this is also the Financing Instrument.<br>          Project_name : short name of the project|
|» description|string|true|none|Full project name.|
|» reti_id|string|true|none|Unique identifier of the project|
|» loaded_at|string|true|none|The timestamp of the item that is made available to IATI|
|» valid_until|string|true|none|The timestamp until which the item is valid for IATI consumption|
|» approval_actual_date|string¦null|false|none|The date on which the project was actually approved the Executive Board or IFAD President.|
|» approval_planned_date|string¦null|false|none|The date on which the project is planned to go to the Executive Board or IFAD President for approval|
|» closing_date_actual|string¦null|false|none|The date on which the project is actually closed for disbursement.|
|» closing_date_planned|string¦null|false|none|The date on which the project is planned to be financially closed for disbursement.|
|» manager_name|string¦null|false|none|Country Programme Manager that manages the project|
|» sector_id|string¦null|false|none|Sector of the Project.<br>FISH Fisheries<br>STLLM Settlement<br>CREDI Credit and Financial Services<br>AGRIC Agricultural Development<br>PGMLO Programme Loan<br>RURAL Rural Development<br>RSRCH Research/Extension/Training<br>IRRIG Irrigation<br>LIVST Livestock<br>MRKTG Marketing/Storage/Processing|
|» status_id|string|true|none|Current Status of the Project.<br>A Pending<br>B Concept Approved<br>E Board/President Approved<br>F Signed<br>G Entry into Force<br>H Available for Disbursement<br>I Negotiated<br>J DR Cleared<br>K DR Endorsed<br>M Project Completed<br>N Financial Closure<br>U Suspended - Force Majeure<br>X Dropped from Pipeline<br>Y Cancelled<br>Z On Hold/Suspended|
|» type|string|false|none|Identifier to distinguish between an investment project(INVPR) or a grant(GRANT)|
|» type_description|string|false|none|Description of the type of project - investment project(INVPR) or a grant(GRANT)|
|» country_code|string¦null|false|none|IS02 country code of the recipient of the project funding|
|» country_slug|string¦null|false|none|Short name of the country|
|» country_title|string¦null|false|none|Official name of the country|
|» kind|string|true|none|The type of project provided to the country|
|» kind_description|string|true|none|The description of the type of project|
|» latitude|string¦null|false|none|Coordinate that specifies the north-south position of a point on the surface of the Earth|
|» longitude|string¦null|false|none|Coordinate that specifies the east-west position of a point on the surface of the Earth|
|» created_at|string|true|none|The timestamp of creation of the item in the object|
|» updated_at|string|true|none|The timestamp of the last update on the item|
|relationships|object|false|none|none|
|» financial_instruments|object|true|none|none|
|»» data|[object]|true|none|none|
|»»» id|string|true|none|none|
|»»» type|string|true|none|none|
|» objectives|object|true|none|none|
|»» data|[object]|true|none|none|
|»»» id|string|true|none|none|
|»»» type|string|true|none|none|
|» transactions|object|true|none|none|
|»» data|[object]|true|none|none|
|»»» id|string|true|none|none|
|»»» type|string|true|none|none|
|links|object|false|none|none|
|» self|string|true|none|none|

<h3 id="tocS_objective">objective</h3>
<!-- backwards compatibility -->
<a id="schemaobjective"></a>
<a id="schema_objective"></a>
<a id="tocSobjective"></a>
<a id="tocsobjective"></a>



> Example responses


```json
{
  "attributes": {
    "sequence_no": 0,
    "title": "string",
    "description": "string",
    "reti_id": "string",
    "loaded_at": "string",
    "valid_until": "string",
    "created_at": "string",
    "updated_at": "string"
  },
  "relationships": {
    "project": {
      "data": {
        "id": "string",
        "type": "string"
      }
    }
  },
  "links": {
    "self": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|none|
|» sequence_no|integer|true|none|The objectives of the project are ordered based on the sequence number|
|» title|string|true|none|Categorisation of the objective of the project|
|» description|string|true|none|Actual objective belonging to the category of the project|
|» reti_id|string|true|none|Unique identifier of the object.|
|» loaded_at|string|true|none|The timestamp of the item that is made available to IATI|
|» valid_until|string|true|none|The timestamp until which the item is valid for IATI consumption|
|» created_at|string|true|none|The timestamp of creation of the item in the object|
|» updated_at|string|true|none|The timestamp of the last update on the item|
|relationships|object|false|none|none|
|» project|object|true|none|none|
|»» data|object|true|none|none|
|»»» id|string|true|none|none|
|»»» type|string|true|none|none|
|links|object|false|none|none|
|» self|string|true|none|none|

<h3 id="tocS_transaction">transaction</h3>
<!-- backwards compatibility -->
<a id="schematransaction"></a>
<a id="schema_transaction"></a>
<a id="tocStransaction"></a>
<a id="tocstransaction"></a>




> Example responses


```json
{
  "attributes": {
    "reti_id": "string",
    "aid_type": "string",
    "currency": "string",
    "description": "string",
    "disbursement_channel_code": 0,
    "finance_type": 0,
    "flow_type": 0,
    "narrative": "string",
    "transaction_code": 0,
    "transaction_date": "string",
    "transaction_type": "string",
    "value": 0,
    "value_date": "string",
    "created_at": "string",
    "updated_at": "string"
  },
  "relationships": {
    "project": {
      "data": {
        "id": "string",
        "type": "string"
      }
    }
  },
  "links": {
    "self": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|none|
|» reti_id|string|true|none|Unique identifier of the object.|
|» aid_type|string|true|none|Aid type comes from IATI standard code. IFAD only shares project-type interventions and the standard value for this is C01.|
|» currency|string|true|none|Denomination currency of the financing instrument and the transactions|
|» description|string|true|none|Unique reference number of the financing instrument|
|» disbursement_channel_code|number|true|none|Comes from IATI standard code.<br>          IFAD only disburses money through the ministry of the governments. <br>          The standard value for this is 1.<br>          1-Money is disbursed through central Ministry of Finance or Treasury|
|» finance_type|number|true|none|Comes from IATI standard code.  <br>          IFAD only disburses money through the financing instruments that are either loans or grants. The standard values are 421 and 110.<br>          421-Loans<br>          110-Grants|
|» flow_type|number|true|none|Comes from IATI standard code.  IFAD only disburses money through official flows excluding export credit. The standard value for this is 21.<br>          21- Other Official Flows excluding export credit|
|» narrative|string|true|none|This is concatenation of fields based on the condition when transaction_type is 'Commitment' then account_number and product_category or when transaction_type is 'Disbursement' then account_number and rfd_ref_no and request_type_desc.<br>          <b>account_number:</b> The loan or grant number<br>          <b>product_category:</b> This is the Financing Instrument broad category: Loans, Grants, Admin Loans or DSF<br>          <b>rfd_ref_no:</b> Request for Disbursement unique code generated by Flexcube<br>          <b>request_type_desc:</b> Type of Withdrawal Application description. I.e. Replenisment, Direct Payment, etc|
|» transaction_code|number|true|none|Comes from IATI standard code.  IFAD only shares transactions on commitments and disbursements. <br>                            The standard values are 2 and 3.<br>                            2- Outgoing Commitment<br>                            3 - Disbursement|
|» transaction_date|string¦null|false|none|For commitments, the transaction date is the approval date of the commitment and for disbursements, <br>          shows the credit value date of the transaction.|
|» transaction_type|string|true|none|There are 2 types of transactions below as per the IATI code reference taken,<br>          <b>Disbursement</b> - Outgoing funds that are placed at the disposal of a recipient government or organisation, or funds transferred between two separately reported activities.<br>          <b>Commitment</b> - A firm, written obligation from a donor or provider to provide a specified amount of funds, under particular terms and conditions, for specific purposes, for the benefit of the recipient.|
|» value|number|true|none|For commitments, value is the amount financed for the financing instrument and for disbursements, <br>          shows the transaction amount of the disbursement.|
|» value_date|string¦null|false|none|For commitments, the transaction date is the approval date of the commitment and for disbursements, <br>          shows the credit value date of the transaction.|
|» created_at|string|true|none|The timestamp of creation of the item in the object|
|» updated_at|string|true|none|The timestamp of the last update on the item|
|relationships|object|false|none|none|
|» project|object|true|none|none|
|»» data|object|true|none|none|
|»»» id|string|true|none|none|
|»»» type|string|true|none|none|
|links|object|false|none|none|
|» self|string|true|none|none|


## Core Banking schemas

<h3 id="tocS_Pair">Pair</h3>
<!-- backwards compatibility -->
<a id="schemapair"></a>
<a id="schema_Pair"></a>
<a id="tocSpair"></a>
<a id="tocspair"></a>



> Example responses


```json
{
  "branch_code": "string",
  "from_currency": "string",
  "to_currency": "string"
}

```

Pair

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branch_code|string|true|none|Flexcube branch code (000-head office for static maintenance and 001 - all transactions)|
|from_currency|string|true|none|The source currency code (ISO 4217) for the exchange rate. (e.g. USD, EUR, GBP, etc.)|
|to_currency|string|true|none|The target currency code (ISO 4217) for the exchange rate. (e.g. USD, EUR, GBP, etc.)|

<h3 id="tocS_RateValue">RateValue</h3>
<!-- backwards compatibility -->
<a id="schemaratevalue"></a>
<a id="schema_RateValue"></a>
<a id="tocSratevalue"></a>
<a id="tocsratevalue"></a>


> Example responses


```json
{
  "branch_code": "string",
  "from_currency": "string",
  "to_currency": "string",
  "mid_rate": 0,
  "buy_rate": 0,
  "sale_rate": 0,
  "rate_date": "2019-08-24T14:15:22Z"
}

```

RateValue

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branch_code|string|true|none|Flexcube branch code (000-head office for static maintenance and 001 - all transactions)|
|from_currency|string|true|none|The source currency code (ISO 4217) for the exchange rate. (e.g. USD, EUR, GBP, etc.)|
|to_currency|string|true|none|The target currency code (ISO 4217) for the exchange rate. (e.g. USD, EUR, GBP, etc.)|
|mid_rate|number|true|none|Mid rate - this rate is used in Flexcube|
|buy_rate|number|true|none|none|
|sale_rate|number|true|none|none|
|rate_date|string(date-time)|true|none|none|

