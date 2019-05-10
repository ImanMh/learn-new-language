import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    paddingHorizontal: 10,
  },
  contentContainer: {
    paddingTop: 30,
  },
  inputSection: {
    paddingVertical: 10,
    position: 'relative',
  },
  multilineInput: {
    backgroundColor: '#fff',
    height: 80,
    padding: 10,
  },
  saveButtonWrapper: {
    backgroundColor: '#bbb',
    position: 'absolute',
    bottom: 15,
    right: 15,
    minWidth: 70,
  },
  suggestedTranslations: {

  },
  suggestedTranslationsTitle: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  suggestedTranslationItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    height: 45,
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: 10,
  },
});

class AddNewTranslation extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View
          style={styles.inputSection}
        >
          <TextInput
            placeholder="Add the new word..."
            style={styles.multilineInput}
            multiline
            onChangeText={(newWord) => { this.setState({ newWordInput: newWord }); }}
          />
        </View>
        <View
          style={styles.inputSection}
        >
          <TextInput
            placeholder="Add translation..."
            style={styles.multilineInput}
            multiline
            onChangeText={(newWord) => { this.setState({ translationInput: newWord }); }}
          />
          <View style={styles.saveButtonWrapper}>
            <Button
              color="#555"
              title="Add"
              onPress={() => { console.log('add the save handler.'); }}
            />
          </View>
        </View>
        <View
          style={styles.suggestedTranslations}
        >
          <Text style={styles.suggestedTranslationsTitle}>Suggested Translations</Text>
          <FlatList
            data={[
              { value: 'sib', id: 1 },
              { value: 'sibe ghermez', id: 2 },
              { value: 'sibe sabz', id: 3 },
            ]}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <View
                style={styles.suggestedTranslationItem}
              >
                <Text>{item.value}</Text>
              </View>
            )}
          />
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  color: state.theme,
});


export default connect(mapStateToProps)(AddNewTranslation);
