import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';


import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Sam"
                    datePosted="Today at 17:00"
                    commentText="React is Awesome!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Alex"
                    datePosted="Today at 11:00 AM"
                    commentText="React is Powerful!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jane"
                    datePosted="Yesterday at 17:00"
                    commentText="React is Simple!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));