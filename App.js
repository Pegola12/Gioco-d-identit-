import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

export default function App() {
  const [emotion, setEmotion] = useState('');
  const [quests, setQuests] = useState([]);

  const emotions = ['Felicità', 'Tristezza', 'Rabbia', 'Calma', 'Ansia'];

  const handleEmotionSelect = (e) => {
    setEmotion(e);
    generateQuest(e);
  };

  const generateQuest = (emotion) => {
    let description = '';
    switch (emotion) {
      case 'Felicità':
        description = 'Concediti 30 minuti di relax.';
        break;
      case 'Tristezza':
        description = 'Scrivi un diario di gratitudine.';
        break;
      case 'Rabbia':
        description = 'Esegui un allenamento fisico.';
        break;
      case 'Calma':
        description = 'Leggi per 30 minuti.';
        break;
      case 'Ansia':
        description = 'Fai una sessione di meditazione.';
        break;
      default:
        description = 'Riposati e riconnettiti.';
    }
    setQuests([...quests, { emotion, description }]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Gioco dell'Identità</Text>
      <Text style={styles.subtitle}>Come ti senti oggi?</Text>
      {emotions.map((e, i) => (
        <Button key={i} title={e} onPress={() => handleEmotionSelect(e)} />
      ))}
      <Text style={styles.subtitle}>Missioni generate:</Text>
      {quests.map((quest, i) => (
        <Text key={i} style={styles.quest}>{quest.emotion}: {quest.description}</Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20
  },
  subtitle: {
    fontSize: 20,
    marginTop: 20
  },
  quest: {
    fontSize: 16,
    marginVertical: 5
  }
});