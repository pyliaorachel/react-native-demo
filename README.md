# react-native-demo

Demo - React Native Basics & Redux Basics.  
[Presentation Slides (SITCON HK 2017)](https://docs.google.com/presentation/d/19DU7yhsr0jvPBcUY751Jdb6kBoYgBk2iK9aA_qvwosA/edit?usp=sharing)  
[Presentation Video](https://youtu.be/8favjxhj7vs)

#### Usage

- Run complete project: see `master` branch
  ```
  $ git clone https://github.com/pyliaorachel/react-native-demo.git
  
  # ReactNativeBasics - using create-react-native-app & Expo
  $ cd react-native-demo/ReactNativeBasics
  $ yarn install
  $ npm start
  
  # ReactNativeReduxBasics - using react-native-cli
  $ cd react-native-demo/ReactNativeReduxBasics
  $ yarn install
  $ react-native run-ios
  ```
  
- View intermediate stages: see respective tags
  ```
  $ git checkout <tag-name>
  ```
  - `ReactNativeBasics`
    - `basic-start`: a clean `create-react-native-app` project with a SITCON logo
    - `basic-end`: a completed random color generator
  - `ReactNativeReduxBasics`
    - `redux-clean`: basic redux structure, router & store configured; no actions | reducers
    - `redux-start`: `checkout` function implemented
    - `redux-end`: `addOneToCart` function implemented

#### Notes

Sorry that in the `ReactNativeReduxBasics`, the `Store` component is confusing with the `redux store`. They are completely independent things; the `Store` component is just an anology to a real-world store, where you can buy fruit, snacks, etc. as shown in the demo.
