import { StyleSheet, Text, View,FlatList } from 'react-native';
import Header from '../../Components/Header';
import Balance from '../../Components/Balance';
import Movements from '../../Components/Movements';
import Actions from '../../Components/Actions';


const list = [{
  
  id: 1,
  label:' Salário',
  value: ' 15,000',
  date: ' 10/05/2023',
  type: 1
},
{
  id: 2,
  label:' Pensão Leia Skywalker',
  value: ' 3,000',
  date: ' 19/05/2023',
  type: 0
},
{
  id: 2,
  label:' Pensão Luke Skywalker',
  value: ' 3,000',
  date: ' 20/05/2023',
  type: 0
},
]

  


export default function Home() {
  return (
    <View style={styles.container}>
        <Header name='   Darth Vader'></Header>
        <Balance saldo='15,000' gasto='6,000'></Balance>
        <Actions></Actions>
      <Text style={styles.title}> Últimas Movimentações </Text>
       
      <FlatList
      style={styles.list}
      data={list}
      keyExtractor={(item)=> String(item.id)}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => <Movements data={item} />}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd : 14,
  }
});
