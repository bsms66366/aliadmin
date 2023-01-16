  handlePress() {
    Linking.canOpenURL(url).then((supported) => {
      return Linking.openURL(url);
    });
  }