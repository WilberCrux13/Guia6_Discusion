import React, { useState } from 'react'; 
import {View, StyleSheet,Image,ScrollView,Text,Modal,Button,TouchableHighlight} from 'react-native'; 
 
const App = () =>{
  const [modalVisiblehabitacion,setModalVisibleHabitacion] = useState(false); 
  const [modalVisibleservicio,setModalVisibleServicio] = useState(false); 
  const [modalVisibleLugar1, setModalVisibleLugar1] = useState(false);
  const [modalVisibleLugar2, setModalVisibleLugar2] = useState(false);
  const [modalVisibleLugar3, setModalVisibleLugar3] = useState(false);
  const [modalVisibleLugar4, setModalVisibleLugar4] = useState(false);
  return( 
    <> 
<ScrollView>
  <Modal transparent={true} animationType="slide" visible={modalVisiblehabitacion} onRequestClose={() => {
    alert('Modal has been closed.');
  }}>
  <View style={styles.vistaModal}>
    <View style={styles.Modal}>
      <Text style={styles.subtitulo}>Tipos de habitaciones</Text>
      <Text>En el hotel DPS hay tres tipos de habitaciones,la habitacion individual que cuenta solamente con una cama king size,la habitaciobn para 2 personas que cuenta con dos camas de tamaño normal,y la habitacion triple que cuenta con 3 camas y 2 baños</Text>
      <Button title="Cerrar" onPress={()=> {setModalVisibleHabitacion(!modalVisiblehabitacion)}}></Button>
    </View>
  </View>
  </Modal> 

<Modal transparent={true} animationType="slide" visible={modalVisibleservicio} onRequestClose={() => {
    alert('Modal has been closed.');
  }}>
  <View style={styles.vistaModal}>
    <View style={styles.Modal}>
      <Text style={styles.subtitulo}>Servicios de hotel</Text>
      <Text>En el hotel contamos con diferentes tipos de servicios en los que destacan estan,una sala de videojuegos,tambien con un gymnasio,tambien contamos con servicio a la habitacion por cualquier cosa que se necesite.</Text>
      <Button title="Cerrar" onPress={()=> {setModalVisibleServicio(!modalVisibleservicio)}}></Button>
    </View>
  </View>
  </Modal>
  

<Modal transparent={true} animationType="slide" visible={modalVisibleLugar1} onRequestClose={() => {
    alert('Modal has been closed.');
  }}>
  <View style={styles.vistaModal}>
    <View style={styles.Modal}>
      <Text style={styles.subtitulo}>Lugares cercanos de interes</Text>
      <Text>cerca del hotel se encuentran restaurantes 4 y 5 estrellas para disfrutar de excelentes platillos.</Text>
      <Button title="Cerrar" onPress={()=> {setModalVisibleLugar1(!modalVisibleLugar1)}}></Button>
    </View>
  </View>
  </Modal>


  <Modal transparent={true} animationType="slide" visible={modalVisibleLugar2} onRequestClose={() => {
    alert('Modal has been closed.');
  }}>
  <View style={styles.vistaModal}>
    <View style={styles.Modal}>
      <Text style={styles.subtitulo}>Lugares cercanos de interes</Text>
      <Text>Parque de diversiones a solo 300 metros del hotel,un lugar para disfrutar en familia</Text>
      <Button title="Cerrar" onPress={()=> {setModalVisibleLugar2(!modalVisibleLugar2)}}></Button>
    </View>
  </View>
  </Modal>

  <Modal transparent={true} animationType="slide" visible={modalVisibleLugar3} onRequestClose={() => {
    alert('Modal has been closed.');
  }}>
  <View style={styles.vistaModal}>
    <View style={styles.Modal}>
      <Text style={styles.subtitulo}>Lugares cercanos de interes</Text>
      <Text>Discoteca kronos cerca del hotel para disfrutar un ambiente diferente para los adultos</Text>
      <Button title="Cerrar" onPress={()=> {setModalVisibleLugar3(!modalVisibleLugar3)}}></Button>
    </View>
  </View>
  </Modal>

  <Modal transparent={true} animationType="slide" visible={modalVisibleLugar4} onRequestClose={() => {
    alert('Modal has been closed.');
  }}>
  <View style={styles.vistaModal}>
    <View style={styles.Modal}>
      <Text style={styles.subtitulo}>Lugares cercanos de interes</Text>
      <Text>Centros comercial las Cascadas donde puede encontrar todo tipo de comercios</Text>
      <Button title="Cerrar" onPress={()=> {setModalVisibleLugar4(!modalVisibleLugar4)}}></Button>
    </View>
  </View>
  </Modal>

<Text style={styles.titulo}>Hotel DPS</Text>
  <View style={{flexDirection:'row'}} > 
    <Image  style={styles.banner}  source={require('./src/img/hotel.jpg')} /> 
  </View>
  <View style={styles.contenedor}>
    <Text style={styles.titulo}>Tipo de Habitación</Text>
    <ScrollView horizontal>
      <View>
        <TouchableHighlight onPress={()=>{setModalVisibleHabitacion(!modalVisiblehabitacion)}}>
        <Image style={styles.habitacion} source={require('./src/img/habitacion1.jpg')} />
        </TouchableHighlight>  
      </View>
      <View>
      <TouchableHighlight onPress={()=>{setModalVisibleHabitacion(!modalVisiblehabitacion)}}>
        <Image style={styles.habitacion} source={require('./src/img/habi2.jpg')} />  
         </TouchableHighlight>  
      </View>
      <View>
      <TouchableHighlight onPress={()=>{setModalVisibleHabitacion(!modalVisiblehabitacion)}}>
        <Image style={styles.habitacion} source={require('./src/img/habi3.jpg')}   /> 
         </TouchableHighlight>   
      </View>
      </ScrollView>

    <Text style={styles.titulo}>Servicios de Hotel</Text>

    <View>
      <TouchableHighlight onPress={()=>{setModalVisibleServicio(!modalVisibleservicio)}}>
      <Image style={styles.mejores} source={require('./src/img/gym.jpg')} />
      </TouchableHighlight>
    </View>
    <View>
    <TouchableHighlight onPress={()=>{setModalVisibleServicio(!modalVisibleservicio)}}>
      <Image style={styles.mejores} source={require('./src/img/servicioH.jpg')} />
       </TouchableHighlight>
    </View>
    <View>
     <TouchableHighlight onPress={()=>{setModalVisibleServicio(!modalVisibleservicio)}}>
      <Image style={styles.mejores} source={require('./src/img/videojuegos.jpg')} />
       </TouchableHighlight>
    </View>
  </View>
  <Text style={styles.titulo}>Lugares cercanos de interes</Text>
  <View style={styles.listado}>
  <View style={styles.listaItem}>
      <TouchableHighlight onPress={()=>{setModalVisibleLugar1(!modalVisibleLugar1)}}>
      <Image style={styles.mejores} source={require('./src/img/restaurante.jpg')}  />
      </TouchableHighlight>
  </View>
  <View style={styles.listaItem}>
  <TouchableHighlight onPress={()=>{setModalVisibleLugar2(!modalVisibleLugar2)}}>
    <Image style={styles.mejores} source={require('./src/img/parque.jpg')}  />
    </TouchableHighlight>
  </View>
  <View style={styles.listaItem}>
  <TouchableHighlight onPress={()=>{setModalVisibleLugar3(!modalVisibleLugar3)}}>
    <Image style={styles.mejores} source={require('./src/img/disco.jpg')} />
    </TouchableHighlight>
  </View>
  <View style={styles.listaItem}>
  <TouchableHighlight onPress={()=>{setModalVisibleLugar4(!modalVisibleLugar4)}}>
    <Image style={styles.mejores} source={require('./src/img/centrocomercial.jpg')} />
    </TouchableHighlight>
  </View>
</View>
</ScrollView> 
</> 
  ); 
}; 
 
const styles = StyleSheet.create({ 
banner:{ 
  height:250, 
  flex:1 
},
titulo:{
  fontWeight:'bold',
  fontSize:22,
  marginVertical:10
},
contenedor:{
  marginHorizontal:10
},
habitacion:{
    width:300,
    height:200,
    marginRight:9
  },
mejores:{
  width:'100%',
  height:200,
  marginVertical:5,
},
listaItem:{
  flexBasis:'49%'
},
listado:{
  flexDirection:'row',
  flexWrap:'wrap',
  justifyContent:'space-between'
},
vistaModal:{
  backgroundColor:'#40B1F9',
  flex:1
},
Modal:{
  backgroundColor:'#fff',
  margin:50,
  padding:40,
  borderRadius:10,
  flex:1
},
subtitulo: {
  fontWeight:'bold',
  fontSize:14,
  justifyContent:'center'
} 
}); 
 
export default App;
