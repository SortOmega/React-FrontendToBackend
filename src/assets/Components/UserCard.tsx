import { Component } from 'react';

export default class UserCard extends Component<{
  user: string;
  age?: number;
  description?: string;
}> {
  constructor(props: any) {
    super(props);
  }
}
