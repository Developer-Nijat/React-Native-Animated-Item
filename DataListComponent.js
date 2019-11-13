import React, { Component } from "react";
import {
  Container,
  Content,
  ListItem,
  Text,
  Left,
  Body,
  List
} from "native-base";
import AnimatedItem from '../../AnimatedItem';

class DataListComponentScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  render() {
    return (
      <Container >
        <Content>
          <List>
            {
              this.state.data && this.state.data.length ?
                this.state.data.map((item, i) => (
                  <AnimatedItem index={i} key={i}>
                    <ListItem thumbnail key={i}>
                      <Left></Left>
                      <Body>
                        <Text>{item.title}</Text>
                      </Body>
                    </ListItem>
                  </AnimatedItem>
                ))
                :
                <Text>no_data_found</Text>
            }
          </List>
        </Content>
      </Container>
    );
  }
}

export default DataListComponentScreen;
