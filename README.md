# BitStack

This Repository is based on the monorepo stucture and consists of backend and frontend repo for the BitStack.

## Run Locally

Clone the project

```bash
  git clone git@github.com:Ninx96/BitStack.git
```

Go to the project directory

```bash
  cd BitStack
```

Make sure you have yarn installed if not use to install yarn

```bash
  npm i yarn
```

Install dependencies

```bash
  yarn install
```

You can simply start the Backend Service by running

```bash
  yarn start-be
```

And start Frontend Service by simply

```bash
  yarn start-fe
```

This project is made with yarn workspaces, to run a certain script in any service just simply use

```bash
  yarn workspace @wheelsfly/<packageName> run <script>
```

## Authors

- [@ninx96](https://www.github.com/ninx96)
