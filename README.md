This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### Base Typos

```
export const BaseHKGroteskText = styled.span`
   font-family: 'HKGroteskRegular';
`

export const BaseHKGroteskBoldText = styled(BaseHKGroteskText)`
   font-weight: bold;
`

export const BaseHKGroteskSemiBoldText = styled(BaseHKGroteskText)`
   font-weight: 600;
`

export const BaseHKGroteskMediumText = styled(BaseHKGroteskText)`
   font-weight: 500;
`
```

## This Repo is configured with

- Tailwind setup
- Styled Components
- Mobx setup
- twin macro
- Lintstaged and Prettier setup with precommit hook
- React router setup
- Folder structure is optimized for small scale applications
