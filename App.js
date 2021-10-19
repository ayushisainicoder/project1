
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity ,SafeAreaView} from 'react-native';
import { SliderBox } from "react-native-image-slider-box";

import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
apiKey: "AIzaSyAtaee9PfX4xkElwO0gMSQnmXJu04zYaI4",
authDomain: "imsr-a246f.firebaseapp.com",
databaseURL: "https://imsr-a246f.firebaseio.com",
projectId: "imsr-a246f",
storageBucket: "imsr-a246f.appspot.com",
messagingSenderId: "354140832486",
appId: "1:354140832486:web:d9b86e914796bb6dc67127",
measurementId: "G-1RCNVMFLJ3"
};

firebase.initializeApp(firebaseConfig);
export default class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlVCuG5z2pVcD-qDJ5Vz11eK6W6ABoWFOWq6jOsYR-OAMNxmqP&s",
        "https://firebasestorage.googleapis.com/v0/b/imsr-983fc.appspot.com/o/maxresdefault.png?alt=media&token=f19f6e16-f4e7-4f5e-a541-f0c2b4b2177a",
        "https://firebasestorage.googleapis.com/v0/b/imsr-983fc.appspot.com/o/image.png?alt=media&token=7ddcd044-8662-47e4-b027-9695af4a835a",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://firebasestorage.googleapis.com/v0/b/imsr-a246f.appspot.com/o/2017-03-14-15-35-52-349.jpg?alt=media&token=2313f3fc-08a2-4c0b-a7ee-aad24ae3e7e7",
        "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://www.petsworld.in/blog/wp-content/uploads/2014/09/cute-kittens.jpg",
        "https://source.unsplash.com/1024x768/?tree", // Network image
          //require('./assets/images/girl.jpg'),          // Local image
      ]
    }

  }

  componentDidMount() {

     firebase.firestore().collection('sliders').get()
     .then(snapshot => {
       console.log('snapshot',snapshot);
       var mynewImages = [];

       snapshot.docs.map(eachRow => {
           console.log('eachRow image',eachRow.data().name);
           var newImageURL = eachRow.data().name;
           mynewImages.push(newImageURL);
       })

       console.log('finally my array is',mynewImages);
       this.setState({ images: mynewImages });

     }).catch(error => {
       console.log('error to get data',error)
     })


   }


  render(){



    return (



<SafeAreaView>
      <View style={{marginTop: 80,alignItems:'center'}}>

      <Text>HELLO World</Text>
      <SliderBox
      autoplay ={true}
      images={this.state.images}
      dotColor="#FFEE58"
      inactiveDotColor="#90A4AE"
      SliderBoxHeight={200}
       onCurrentImagePressed={data => console.log('image tapped',data)}/>





      </View>
      </SafeAreaView>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
