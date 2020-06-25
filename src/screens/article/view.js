import React from 'react';
import { Container, Row, Col, Image, InputGroup, FormControl, Button, Media } from 'react-bootstrap';

import AppLayout from '../../layouts/AppLayout';

export class ArticleViewScreen extends React.Component
{
	render() {
		return (
			<AppLayout>
				<Container fluid className="p-5 mt-5">
					<Row>
						<Col sm={8}>
							<Image src="https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img-fluid img-responsive" style={{ width: '100%', height: '400px' }} />
							<small className="mt-2">January, 20 2020</small>
							<p className="mt-2">What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever, 
							What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever</p>
						</Col>
						<Col sm={4}>
							Related Article
							<Media className="mt-3">
							  	<img
							    	width={150}
							    	className="mr-3"
							    	src="https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
							    	alt="Generic placeholder"
							  	/>
							  	<Media.Body>
							    	<a href="/article/title/"><h6>Mega Hits 2020 🌱 The Best Of Vocal...</h6></a>
							    	<small className="mt-0">Article</small><br/>
							    	<small className="mt-0">11k Views - 1 day ago</small>
							  </Media.Body>
							</Media>
							<Media className="mt-3">
							  	<img
							    	width={150}
							    	className="mr-3"
							    	src="https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
							    	alt="Generic placeholder"
							  	/>
							  	<Media.Body>
							    	<a href="/article/title/"><h6>Mega Hits 2020 🌱 The Best Of Vocal...</h6></a>
							    	<small className="mt-0">Article</small><br/>
							    	<small className="mt-0">11k Views - 1 day ago</small>
							  </Media.Body>
							</Media>
							<Media className="mt-3">
							  	<img
							    	width={150}
							    	className="mr-3"
							    	src="https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
							    	alt="Generic placeholder"
							  	/>
							  	<Media.Body>
							    	<a href="/article/title/"><h6>Mega Hits 2020 🌱 The Best Of Vocal...</h6></a>
							    	<small className="mt-0">Article</small><br/>
							    	<small className="mt-0">11k Views - 1 day ago</small>
							  </Media.Body>
							</Media>
							<Media className="mt-3">
							  	<img
							    	width={150}
							    	className="mr-3"
							    	src="https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
							    	alt="Generic placeholder"
							  	/>
							  	<Media.Body>
							    	<a href="/article/title/"><h6>Mega Hits 2020 🌱 The Best Of Vocal...</h6></a>
							    	<small className="mt-0">Article</small><br/>
							    	<small className="mt-0">11k Views - 1 day ago</small>
							  </Media.Body>
							</Media>
							<Media className="mt-3">
							  	<img
							    	width={150}
							    	className="mr-3"
							    	src="https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
							    	alt="Generic placeholder"
							  	/>
							  	<Media.Body>
							    	<a href="/article/title/"><h6>Mega Hits 2020 🌱 The Best Of Vocal...</h6></a>
							    	<small className="mt-0">Article</small><br/>
							    	<small className="mt-0">11k Views - 1 day ago</small>
							  </Media.Body>
							</Media>
						</Col>
					</Row>
				</Container>
			</AppLayout>
		);
	}
}