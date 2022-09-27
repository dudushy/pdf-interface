[![pages-build-deployment](https://github.com/dudushy/pdf-interface/actions/workflows/pages/pages-build-deployment/badge.svg?branch=gh-pages)](https://github.com/dudushy/pdf-interface/actions/workflows/pages/pages-build-deployment)
# [pdf-interface](https://dudushy.github.io/pdf-interface/)
Pdf dynamic interface.
> version 14.1.2
---

## Prerequisites:
- [NodeJS](https://nodejs.org/)

## Setup:
1. Install Packages
    ```bash
    npm i
    ```

2. Create new project
    ```bash
    ng new pdf-interface

    ? Would you like to share anonymous usage data about this project with the Angular Team at
    Google under Google’s Privacy Policy at https://policies.google.com/privacy. For more
    details and how to change this setting, see https://angular.io/analytics. No
    ? Would you like to add Angular routing? Yes
    ? Which stylesheet format would you like to use? SCSS
    ```

3. Setup ESLint
    ```bash
    npm init @eslint/config
    ```

4. Generate
    ```bash
    bash generate.sh
    ```

    > [generate.sh](/generate.sh)

5. Run project
    ```bash
    ng serve
    ```

6. Build project
    ```bash
    bash build.sh
    ```

    > [build.sh](/build.sh)
