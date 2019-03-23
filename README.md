# @rnhooks/dimensions [![Build Status](https://travis-ci.com/react-native-hooks/dimensions.svg?branch=master)](https://travis-ci.com/react-native-hooks/dimensions) [![Maintainability](https://api.codeclimate.com/v1/badges/8fc6c44e1592835fd670/maintainability)](https://codeclimate.com/github/react-native-hooks/app-state/maintainability) <a href="https://github.com/pritishvaidya/react-native-hooks/dimensions/blob/master/README.md"><img src="https://img.shields.io/badge/module%20formats-umd%2C%20cjs%2C%20esm-green.svg" alt="module formats: umd, cjs, esm"></a>

> React Native hook for Dimensions

### Installation

```bash
$ yarn add @rnhooks/app-state
```
### Usage

```
import useAppState from '@rnhooks/app-state';

function App() {
  const { status, foreground } = useAppState();
  return (
    <View style={styles.container}>
      <Text style={styles.type}>{`App State: ${status}`}</Text>
      <Text style={styles.type}>{`Foreground: ${foreground}`}</Text>
    </View>
  );
}
```

### Output
| Name  | Default  | Type | Description |
| :------------ |---------------:| :---------------| :-----|
| status | string | `null` | Current App Status |
| foreground | string | `null` | Is foreground or not |

## Contribution
- [@pritishvaidya](mailto:pritishvaidya94@gmail.com) The main author.


## Questions

Feel free to [contact me](mailto:pritishvaidya94@gmail.com) or [create an issue](https://github.com/react-native-hooks/app-state/issues/new)
