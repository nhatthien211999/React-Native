// redux
import { connect } from 'react-redux';
import { postFavorite } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    favorites: state.favorites
  }
};

import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Card, Image, Icon  } from 'react-native-elements';


import { baseUrl } from '../shared/baseUrl';


const mapDispatchToProps = dispatch => ({
  postFavorite: (dishId) => dispatch(postFavorite(dishId))
});

class RenderDish extends Component {
  render() {
    const dish = this.props.dish;
    if (dish != null) {
      return (
        <Card>
          <Image source={{ uri: baseUrl + dish.image }} style={{ width: '100%', height: 100, flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Card.FeaturedTitle>{dish.name}</Card.FeaturedTitle>
          </Image>
          <Text style={{ margin: 10 }}>{dish.description}</Text>
          <Icon raised reverse
            name={this.props.favorite ? 'heart' : 'heart-o'}
            type='font-awesome' color='#f50'
            onPress={() => this.props.favorite ? alert('Already favorite') : this.props.onPress()}
          />
        </Card>
      );
    }
    return (<View />);
  }
}
class RenderComment extends Component{
  render(){
    return (
      <Card>
        <Card.Title>Comment</Card.Title>
        <Card.Divider/>
        <FlatList data={this.props.comments}
          renderItem={({ item, index }) => this.renderCommentItem(item, index)}
          keyExtractor={item => item.id.toString()} />
      </Card>
    )
  }
  renderCommentItem(item, index) {
    return (
      <View key={index} style={{ margin: 10 }}>
        <Text style={{ fontSize: 14 }}>{item.comment}</Text>
        <Text style={{ fontSize: 12 }}>{item.rating} Stars</Text>
        <Text style={{ fontSize: 12 }}>{'-- ' + item.author + ', ' + item.date} </Text>
      </View>
    );
  };
}
class Dishdetail extends Component {
 constructor(props){
   super(props);
 }
 render() {
  const dishId=parseInt(this.props.route.params.dishId);
  const dish = this.props.dishes.dishes[dishId];
  const comments = this.props.comments.comments.filter((comment) => comment.dishId === dishId);
  const favorite = this.props.favorites.some((el) => el === dishId);
  
  return (
  <view>
    <RenderDish dish={dish} favorite={favorite} onPress={() => this.markFavorite(dishId)}/>
    <RenderComment comments={comments}/>
  </view>

  )

};

  markFavorite(dishId) {
    this.props.postFavorite(dishId);
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dishdetail);