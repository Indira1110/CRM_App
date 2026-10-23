# Sign Out Test Plan

## Application Overview

vtiger CRM 5.4.0 is a locally hosted CRM at http://localhost:8888/. An administrator signs in with credentials from testdata/signout.json; the profile icon opens a menu containing a Sign Out link. Successful sign-out returns to the login page. The four scenarios are kept serial in one spec file because parallel requests to this local CRM interfere with each other.

## Test Scenarios

### 1. Sign Out

**Seed:** `tests/seed.spec.js`

#### 1.1. Sign out using test data (DDT)

**File:** `tests/SignOut/signoutfixture.spec.js`

**Steps:**
  1. Open the CRM login page and enter credentials from testdata/signout.json.
    - expect: The authenticated CRM home page is displayed.
  2. Hover over the profile icon and select Sign Out.
    - expect: The CRM login page returns.
    - expect: The login form is visible.

#### 1.2. Sign out using page objects (POM)

**File:** `tests/SignOut/signoutfixture.spec.js`

**Steps:**
  1. Authenticate using the login page object with sign-out test data.
    - expect: The authenticated CRM home page is displayed.
  2. Use the sign-out page object to select Sign Out.
    - expect: The CRM login page returns.
    - expect: The login form is visible.

#### 1.3. Sign out using an authenticated fixture

**File:** `tests/SignOut/signoutfixture.spec.js`

**Steps:**
  1. Use the sign-out fixture to start with an authenticated CRM page.
    - expect: The authenticated CRM home page is displayed.
  2. Select Sign Out from the user profile menu.
    - expect: The CRM login page returns.
    - expect: The login form is visible.

#### 1.4. Sign out and prevent access to the authenticated session

**File:** `tests/SignOut/signoutfixture.spec.js`

**Steps:**
  1. Sign in with sign-out test data and select Sign Out.
    - expect: The CRM login page returns.
  2. Reload after sign-out.
    - expect: The login form remains visible and the authenticated home page is not displayed.
