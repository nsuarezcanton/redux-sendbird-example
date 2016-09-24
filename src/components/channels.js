import React, { Component, PropTypes } from 'react';
import { View, Text, ListView, TouchableHighlight, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchChannels, joinChannel } from '../actions/index';

class Channels extends Component {
  static propTypes = {
    success: PropTypes.bool,
    channelList: PropTypes.array,
    fetchChannels: PropTypes.func,
    joinChannel: PropTypes.func,
    navigator: PropTypes.object,
  };

  static styles = {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'stretch',
      backgroundColor: '#ffffff',
    },
    topContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#5DA9E9',
      paddingTop: 20,
    },
    channelTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#ffffff',
    },
    listContainer: {
      flex: 11,
      justifyContent: 'center',
      alignItems: 'stretch',
    },
    listItem: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f7f8fc',
      borderBottomWidth: 0.5,
      borderColor: '#D0DBE4',
      padding: 5,
    },
    listIcon: {
      justifyContent: 'flex-start',
      paddingLeft: 10,
      paddingRight: 15,
    },
    channelIcon: {
      width: 30,
      height: 30,
    },
    listInfo: {
      flex: 1,
      justifyContent: 'flex-start',
    },
    titleLabel: {
      fontSize: 15,
      fontWeight: '600',
      color: '#60768b',
    },
    memberLabel: {
      fontSize: 13,
      fontWeight: '400',
      color: '#abb8c4',
    },
  }
  static PULLDOWN_DISTANCE = 40;

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    this.state = {
      channelList: [],
      dataSource: ds.cloneWithRows([]),
      page: 0,
      next: 0,
      channelName: '',
    };
  }

  componentWillMount = () => {
    this.props.fetchChannels();
  };

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      channelList: this.state.channelList.concat(nextProps.response.channels),
    }, () => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.state.channelList),
        page: nextProps.response.page,
        next: nextProps.response.next,
      });
    });
  };

  componentDidUpdate = (nextProps) => {
    const { joinChannelSuccessful } = nextProps;
    if (joinChannelSuccessful) {
      this.props.navigator.push({ name: 'chat' });
    }
  };

  onChannelPress = (url) => {
    this.props.joinChannel(url);
  };

  renderRow = (rowData) => {
    return (
      <TouchableHighlight onPress={() => this.onChannelPress(rowData.channel_url)}>
        <View style={Channels.styles.listItem}>
          <View style={Channels.styles.listIcon}>
            <Image style={Channels.styles.channelIcon} source={{ uri: rowData.cover_img_url }} />
          </View>
          <View style={Channels.styles.listInfo}>
            <Text style={Channels.styles.titleLabel}># {rowData.name}</Text>
            <Text style={Channels.styles.memberLabel}>{rowData.member_count} members</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  render () {
    return (
      <View style={Channels.styles.container}>
        <View style={Channels.styles.topContainer}>
          <Text style={Channels.styles.channelTitle}>
            Channels
          </Text>
        </View>
        <View style={Channels.styles.listContainer}>
          <ListView
            enableEmptySections
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
            onEndReached={() => this.props.fetchChannels(this.state.next)}
            onEndReachedThreshold={this.PULLDOWN_DISTANCE}
          />
        </View>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchChannels, joinChannel }, dispatch);
}

function mapStateToProps(state, ownProps = {}) {
  return Object.assign({}, ownProps, state.channels);
}

export default connect(mapStateToProps, mapDispatchToProps)(Channels);
