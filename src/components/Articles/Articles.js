import React, { Component } from 'react';
import { Media } from 'react-bootstrap';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Skeleton from 'react-loading-skeleton';

export class Articles extends Component {
	render() {
		dayjs.extend(relativeTime);
		const {
			articleItem: { id, title, file, created_at },
		} = this.props;
		return (
			<Media className='mt-3'>
				{file ? (
					<iframe
						className='mr-3'
						src={`${file}?auto=compress&cs=tinysrgb&dpr=1&w=500`}
						frameBorder='0'
						scrolling='no'
						autoplay='false'
						style={{
							width: '200px',
							height: '100px',
							overflow: 'hidden',
						}}></iframe>
				) : (
					<Skeleton />
				)}

				<Media.Body>
					<a href={`/article/${id}`}>
						<h6>{title}</h6>
					</a>
					<small className='mt-0'>uploaded time</small>
					<br />
					<small className='mt-0'>{dayjs(created_at).fromNow()}</small>
				</Media.Body>
			</Media>
		);
	}
}

export default Articles;
