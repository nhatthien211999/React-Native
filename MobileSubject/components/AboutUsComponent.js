// redux
import { connect } from 'react-redux';
const mapStateToProps = state => {
  return {
    leaders: state.leaders
  }
};

import React, { Component } from 'react';
import { View, Text, FlatList, YellowBox } from 'react-native';
import { Card,Avatar,ListItem } from 'react-native-elements';
import { baseUrl } from '../shared/baseUrl';
// import { LEADERS } from '../shared/leaders';
import Loading from './LoadingComponent';

class RenderHistory extends Component{
  render(){
    return(
      <Card>
        <Card.Title>Our History</Card.Title>
        <Card.Divider/>
        <Text style={{margin: 10}}>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</Text>
        <Text style={{margin: 10}}>The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</Text>
      </Card>
    )
  }
}

class RenderLeadership extends Component{
  render(){
    if (this.props.isLoading) {
      return (
        <Card>
          <Card.Title>Corporate Leadership</Card.Title>
          <Card.Divider />
          <Loading />
        </Card>
      );
    } else if (this.props.errMess) {
      return (
        <Card>
          <Card.Title>Corporate Leadership</Card.Title>
          <Card.Divider />
          <Text>{this.props.errMess}</Text>
        </Card>
      );
    } else {
    return(
      <Card>
        <Card.Title>Corporate Leadership</Card.Title>
        <Card.Divider/>
        <FlatList data={this.props.items}
        renderItem={({ item, index }) => this.renderLeadership(item, index)}
        keyExtractor={item => item.id.toString()} />
      </Card>
    )
    }
  }
  renderLeadership(item, index) {
    return (
    <ListItem key={index}>
        {/* <Avatar rounded source={require('./images/alberto.png')} /> */}
        <Avatar rounded source={{uri: baseUrl + item.image}} />
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
          <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };
}
class About extends Component {
  constructor(props){
    super(props)
    YellowBox.ignoreWarnings(['VirtualizedLists should never be nested']);

  }
  render() {
    return (
      <Card>
        <RenderHistory />
        <RenderLeadership items={this.props.leaders.leaders}
         isLoading={this.props.leaders.isLoading}
         errMess={this.props.leaders.errMess}/>
      </Card>);
  }
}
export default connect(mapStateToProps)(About);
//component gọi hàm trong ActionCreators >> mapDispatchToDrops
//Component sử dụng data trong redux-store >> mapStateToDrops