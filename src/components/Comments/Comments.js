import React, { Component } from 'react';
import { Media } from 'react-bootstrap';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

export class Comments extends Component {
	render() {
    dayjs.extend(relativeTime);
    const {
			commentItem: {
				name,
				// email,
				message,
				created_at,
			},
		} = this.props;
		return (
			<Media className='mt-3'>
				<img
					className='mr-3'
					src={`https://ui-avatars.com/api/?name=${name}`}
					alt='Generic placeholder'
				/>
				<Media.Body>
					<h5 className='title'>
						{name} <span className='mr-2'>{dayjs(created_at).fromNow()}</span>
					</h5>
					<p className='mt-0'>
						{message}
					</p>
				</Media.Body>
			</Media>
		);
	}
}

export default Comments;
