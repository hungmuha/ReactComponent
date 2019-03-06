import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard> 
                <CommentDetail 
                    author = "Sam" 
                    timeAgo = "Today at 4:45PM" 
                    text="Nice man" 
                    imageSrc = {faker.image.avatar()} 
                />
            </ApprovalCard>
            <ApprovalCard> 
                <CommentDetail 
                    author = "Alex" 
                    timeAgo = "Today at 2:00AM" 
                    text="Nice bro" 
                    imageSrc = {faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard> 
                <CommentDetail 
                    author = "Jame" 
                    timeAgo = "Yesterday at 4:00PM" 
                    text="Nice dude" 
                    imageSrc = {faker.image.avatar()}
                />
            </ApprovalCard>

        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);