import React from 'react';

class Book extends React.Component {
    render() {

        const {title, authors, shelf} = this.props.book;

        const thumbnail = this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : ''

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128,
                        height: 193, backgroundImage: `url("${thumbnail}")`
                    }}/>
                    <div className="book-shelf-changer">
                        <select value={shelf}
                                onChange={(e) => this.props.onBookShelfChange(this.props.book, e.target.value)}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors && authors.join(', ')}</div>
            </div>
        )
    }
}

export default Book
