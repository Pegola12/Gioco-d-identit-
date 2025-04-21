import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, ProgressBarAndroid } from 'react-native';

export default function App() {
  const [emotion, setEmotion] = useState('');
  const [quests, setQuests] = useState([]);
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);

  const emotions = ['Felicità', 'Tristezza', 'Rabbia', 'Calma', 'Ansia'];

  const handleEmotionSelect = (e) => {
    setEmotion(e);
    generateQuest(e);
    gainXp(25);
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

  const gainXp = (amount) => {
    const newXp = xp + amount;
    if (newXp >= 100) {
      setLevel(level + 1);
      setXp(newXp - 100);
    } else {
      setXp(newXp);
    }
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
      <Text style={styles.subtitle}>Livello: {level}</Text>
      <ProgressBarAndroid
        styleAttr="Horizontal"
        indeterminate={false}
        progress={xp / 100}
        color="#6A5ACD"
      />
      <Text style={styles.xp}>XP: {xp} / 100</Text>
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
  },
  xp: {
    fontSize: 16,
    marginTop: 10
  }
});