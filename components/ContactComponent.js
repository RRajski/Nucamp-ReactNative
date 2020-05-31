import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Card } from 'react-native-elements';

class Contact extends Component{
    constructor(props){
        super(props);
        this.state={
           
        }
    }


  static navigationOptions = {
    title: "Contact Us"
  };

  render() {
    return (
    //   <ScrollView>
    //     <Card 
    //     featuredTitle= "Contact Information" wrapperStyle={{ margin: 20 }}>
    //       <View wrapperStyle={{ margin: 20 }}>
    //         <Text>1 Nucamp Way</Text>
    //         <Text>Seattle, WA 98001</Text>
    //         <Text style={{ marginBottom: 10 }}>U.S.A</Text>
    //         <Text>Phone: 1-206-555-1234</Text>
    //         <Text>Email: campsites@nucamp.co</Text>
    //      </Card>
    //      </View>
    //   </ScrollView>
    <ScrollView>
    <Card title= "Contact Information"
       wrapperStyle={{margin: 20}}>
      
       <View wrapperStyle={{margin: 20}}>
           <Text>1 Nucamp Way</Text>
           <Text>Seattle, WA 98001</Text>
           <Text style={{marginBottom: 10}}>U.S.A</Text>
           <Text>Phone: 1-206-555-1234</Text>
           <Text>Email: campsites@nucamp.co</Text>
          
       </View>
   </Card>
   
 </ScrollView>

    );
  }
}
export default Contact;
