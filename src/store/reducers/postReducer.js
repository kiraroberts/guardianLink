const initState = {
  posts: [
    {id: '1', title: 'help me complete garden of salvation', content: 'my clan needs help'},
    {id: '2', title: 'Nightfalls', content: 'max light level fireteam looking for one more for nightfalls'},
    {id: '3', title: 'Crucible LFG one more for clan stack', content: 'must have max light level and positive efficiency'}
  ]
}

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_POST':
      console.log('created post', action.post);
  }
  return state
}

export default postReducer