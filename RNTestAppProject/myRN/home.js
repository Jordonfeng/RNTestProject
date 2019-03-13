/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {
  Component
} from 'react';
import {
  AppRegistry,
  Platform,
  Dimensions,
  StyleSheet,
  View,
  TextInput,
  Button,
  ScrollView,
  Text,
  Alert,
  ListView,
  TouchableHighlight,
  StatusBar,
  Image,
  RefreshControl,
  TouchableOpacity
} from 'react-native';

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

const circleSize = 8;
const circleMargin = 5;


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      dataSource: ds.cloneWithRows([
        {
          image:require('../image/102ea94fe08fe8f1c840c46e05cc145d.jpg'),
          title : '名字1',
          subTitle : '描述1'
        },
        {
          image:require('../image/102ea94fe08fe8f1c840c46e05cc145d.jpg'),
          title : '名字2',
          subTitle : '描述2'
        },{
          image:require('../image/102ea94fe08fe8f1c840c46e05cc145d.jpg'),
          title : '名字3',
          subTitle : '描述3'
        }
      ]),
      advertisements :[
      // {title : '广告1',backgroundColor:'red'},
      // {title : '广告2',backgroundColor:'orange'},
      // {title : '广告3',backgroundColor:'blue'}
      // {
      //   url:'http://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=%E5%9B%BE%E7%89%87&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=2735633715,2749454924&os=1423882261,1566996236&simid=4041337662,948052319&pn=0&rn=1&di=21166381280&ln=1997&fr=&fmq=1552310249178_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&objurl=http%3A%2F%2Fwww.pptbz.com%2Fpptpic%2FUploadFiles_6909%2F201203%2F2012031220134655.jpg&rpstart=0&rpnum=0&adpicid=0&force=undefined'
      // },{
      //   url:'http://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=%E5%9B%BE%E7%89%87&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=1511637900,1216941421&os=3738032176,4055621739&simid=3559833186,598495145&pn=7&rn=1&di=151193035180&ln=1997&fr=&fmq=1552310249178_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&objurl=http%3A%2F%2Fib.topit.me%2Fb%2Ff5%2F26%2F1123443480c9b26f5bo.jpg&rpstart=0&rpnum=0&adpicid=0&force=undefined'
      // },{
      //   url:'http://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=%E5%9B%BE%E7%89%87&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=935292084,2640874667&os=929535083,139004715&simid=3383873348,359765392&pn=1&rn=1&di=111420268630&ln=1997&fr=&fmq=1552310249178_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&objurl=http%3A%2F%2Fwww.pptok.com%2Fwp-content%2Fuploads%2F2012%2F08%2Fxunguang-4.jpg&rpstart=0&rpnum=0&adpicid=0&force=undefined'
      // }
      {
        image:require('../image/102ea94fe08fe8f1c840c46e05cc145d.jpg')
      },
      {
        image:require('../image/90ae18c31de983ee40cd7381bc117440.jpg')
      },
      {
        image:require('../image/ca957c01cdc564cda5dac25fea51e0e5.jpg')
      }
    ],
    searchText :'',
    isRefreshing : false
    };
  }
  render() {
    const { navigate } = this.props.navigation;
    const advertisementCount = this.state.advertisements.length;
    const indicatorWidth = circleSize * advertisementCount + circleMargin * advertisementCount * 2 ;
    const left =  (Dimensions.get('window').width - indicatorWidth) / 2 ;

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor ={'blue'} barStyle = {'default'} networkActivityIndicatorVisible = {true}>
        </StatusBar>
          <View style={styles.searchBar}>
            <TextInput style={styles.textInput} placeholder='搜索商品' onChangeText={(text) =>{
              this.setState({searchText:text});
              console.log('搜索内容 '+this.state.searchText);
            }}></TextInput>
            {/* <Button style={styles.searchButton} title='搜索' onPress = {() => Alert.alert('搜索内容 '+this.state.searchText,null,null)}></Button> */}
            <Button style={styles.searchButton} title='搜索' onPress = {() =>{navigate('page2',{message:'Detail'})}}></Button>
          </View>
          <View style={styles.advertisement}>
            <ScrollView ref='scrollView' 
              horizontal={true} 
              showHorizontalScrollIndicator={false} 
              pagingEnabled = {true}>
              {
                this.state.advertisements.map((advertisement,index) => {
                  return (
                    <TouchableHighlight key={index} onPress = {() =>Alert.alert('',null,null)}>
                      <Image style={styles.advertisementContent} source={advertisement.image}></Image>

                    {/* <Image style={styles.advertisementContent} source={{uri :advertisement.url}}></Image> */}
                      {/* <Text style={[styles.advertisementContent,{backgroundColor:advertisement.backgroundColor}]}>{advertisement.title}</Text> */}
                    </TouchableHighlight>
                  );
                })
              }
            </ScrollView>
            <View style = {[styles.indicator , {left :left}]}>
              {
                this.state.advertisements.map((advertisement,index) =>{
                  return(
                    <View key={index} style = {(index == this.state.currentPage) ? styles.circleSelect : styles.circle}/> 
                  );
                })
              }
            </View>
          </View>
          <View style={styles.listView}>
                <ListView dataSource = {this.state.dataSource} 
                renderRow = {this._renderRow} 
                renderSeparator = {this._renderSeperator} 
                refreshControl = {this._renderRefreshControl()}/>
          </View>

        </View>
    );
  }
  componentDidMount() {
    this._startTimer();
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  _renderRow = (rowData, sectionID, rowID) => {
    return (
      // <TouchableOpacity onPress ={() => {navigate('page2',{message:'Detail'})}}>
        <TouchableHighlight onPress = {() =>Alert.alert('点击 ' + rowData.title,null,null)}>
              <View style = {styles.row}>
                <Image source = {rowData.image} style = {styles.productImage}></Image>
                <View style = {[styles.productText ,{marginLeft : 20}]}>
                  <Text style = {styles.productTitle}>{rowData.title}</Text>
                  <Text style = {styles.productSubTitle}>{rowData.subTitle}</Text>
                </View>
              </View>
        </TouchableHighlight>
        // </TouchableOpacity>
    );
  }

  _renderSeperator(sectionID,rowID,adjacentRowHighlighted){
    return (
      <View key = {`${sectionID}-${rowID}`} style = {styles.divider}></View>
    );
  };

  _renderRefreshControl(){
    return (
      <RefreshControl 
      refreshing = {this.state.isRefreshing} 
      onRefresh={this._onRefresh} 
      tintColor = {'#FF0000'} 
      title={'正在刷新...'} titleColor = '#0000FF'>
      </RefreshControl>
    );
  };

  _onRefresh = () =>{
    this.setState({isRefreshing :true});
    setTimeout(() => {
      const products = Array.from(new Array(10)).map((value,index) =>({
        image:require('../image/90ae18c31de983ee40cd7381bc117440.jpg'),
        title : '新名字' + index,
        subTitle : '新描述' + index
      }));
      this.setState({isRefreshing :false ,dataSource :ds.cloneWithRows(products)});
    }, 2000);
  };

  _startTimer() {
    this.interval = setInterval(() => {
      nextPage = this.state.currentPage + 1;
      if (nextPage >= 3) {
        nextPage = 0;
      }
      this.setState({
        currentPage: nextPage
      });
      const offSetX = nextPage * Dimensions.get('window').width;
      this.refs.scrollView.scrollResponderScrollTo({
        x: offSetX,
        y: 0,
        animated: true
      });
    }, 2000);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray'
  },
  searchBar: {
    marginTop: Platform.OS == 'ios' ? 50 : 0,
    height: 40,
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  textInput: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius:10
  },
  searchButton: {
    // width: 40
    flex: 1
  },
  advertisement: {
    height: 180,
    backgroundColor: 'yellow'
  },
  advertisementContent: {
    height: 180,
    width: Dimensions.get('window').width
  },
  listView: {
    flex: 1,
    backgroundColor: 'white'
  },
  indicator :{
    position : 'absolute',
    top : 160,
    flexDirection : 'row'
  },
  circle : {
    width : circleSize,
    height : circleSize,
    borderRadius : circleSize/2,
    backgroundColor :'gray',
    marginHorizontal : circleMargin
  },
  circleSelect : {
    width : circleSize,
    height : circleSize,
    borderRadius : circleSize/2,
    backgroundColor :'white',
    marginHorizontal : circleMargin
  },
  row :{
    height : 60,
    flexDirection : 'row',
    backgroundColor : 'white'
  },
  productImage :{
    marginLeft : 10,
    width : 40,
    height : 40,
    alignSelf :'center'
  },
  productText :{
    flex : 1,
    marginTop : 10,
    marginBottom : 10
  },
  productTitle :{
    flex : 3,
    fontSize : 16
  },
  productSubTitle :{
    flex : 2,
    fontSize : 14,
    color : 'gray'
  },
  divider:{
    height: 1,
    width : Dimensions.get('window').width -20,
    marginLeft : 10,
    backgroundColor : 'lightgray'
  }
});