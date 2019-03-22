# @rnhooks/network-status [![Build Status](https://travis-ci.com/react-native-hooks/dimensions.svg?branch=master)](https://travis-ci.com/react-native-hooks/dimensions) [![Maintainability](https://api.codeclimate.com/v1/badges/38b8a5ea908ee84db165/maintainability)](https://codeclimate.com/github/react-native-hooks/dimensions/maintainability) <a href="https://github.com/pritishvaidya/react-native-hooks/network-status/blob/master/README.md"><img src="https://img.shields.io/badge/module%20formats-umd%2C%20cjs%2C%20esm-green.svg" alt="module formats: umd, cjs, esm"></a>

> React Native hook for Dimensions

### Installation

```bash
$ yarn add @rnhooks/dimensions
```
### Usage

```
import useDimensions from '@rnhooks/dimensions';

function App() {
  const { fontScale, width, height, scale } = useDimensions('window');

  return (
    <View style={styles.container}>
      <Text style={styles.type}>{`Width: ${width}`}</Text>
      <Text style={styles.type}>{`Height: ${height}`}</Text>
      <Text style={styles.type}>{`Font Scale: ${fontScale}, Scale: ${scale}`}</Text>
    </View>
  );
}
```

### Input
| Name  | Default  | Type | Description |
| :------------ |---------------:| :---------------| :-----|
| `window / screen` | `null` | string | Type `window` or `screen` Dimension |


### Output
| Name  | Default  | Type | Description |
| :------------ |---------------:| :---------------| :-----|
| width | number | `null` | Width of the Screen |
| height | number | `null` | Height of the Screen |
| fontScale | `null` | number | Font Scale of the Screen |
| scale | number | `null` | Scale of the Screen |

## Contribution
- [@pritishvaidya](mailto:pritishvaidya94@gmail.com) The main author.


## Questions

Feel free to [contact me](mailto:pritishvaidya94@gmail.com) or [create an issue](https://github.com/react-native-hooks/dimensions/issues/new)
