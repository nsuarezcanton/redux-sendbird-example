import React, { Component, PropTypes } from 'react';
import { View, Text, ListView, TouchableHighlight, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchChannels } from '../actions/index';

class Channels extends Component {
  static styles = {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'stretch',
      backgroundColor: '#ffffff',
    },
    listContainer: {
      flex: 11,
      justifyContent: 'center',
      alignItems: 'stretch',
      marginTop: 10,
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

  render () {
    return (
      <View style={Channels.styles.container}>
        <View style={Channels.styles.listContainer}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) =>
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
            }
            onEndReached={() => this.getChannelList(this.state.next)}
            onEndReachedThreshold={this.PULLDOWN_DISTANCE}
          />
        </View>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchChannels }, dispatch);
}

export default connect(null, mapDispatchToProps)(Channels);
