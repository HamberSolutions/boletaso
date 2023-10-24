import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import styled from "styled-components";
import { Grid } from "@mui/material";

// component
const PageTicketHero = dynamic(() => import("@/components/templates/hero/PageTicketHero"));
const TrendingSliderWithoutImage = dynamic(() => import("@/components/templates/Slider/TrendingSliderWithoutImage"));
const ImageSliderNoDetail = dynamic(() => import("@/components/templates/Slider/ImageSliderNoDetail"));
const PerformerList = dynamic(() => import("@/components/pageSection/PerformerList"));
const EventList = dynamic(() => import("@/components/pageSection/EventList"));

// Json Data
import { theatreTrendingData, festivalCategoryData } from "@/components/json/moreData";
import { avatarMoreData } from "@/components/json/AvatarData";
import { FestivalEventData } from "@/components/json/EventData";

// styles
const Container = styled.section`
	padding: 2rem 0;

	@media (min-width: 601px) and (max-width: 1024px) {
		padding: 2rem 0;
	}
`;

const Wrapper = styled.div`
	width: 92%;
	margin: auto;
`;

const HeaderBox = styled.div`
	margin-bottom: 1.5rem;

	@media (min-width: 601px) and (max-width: 1024px) {
		margin-bottom: 1rem;
	}
`;

const GridContainer = styled.div``;

const EventContainer = styled.div``;

const PerformerContainer = styled.div``;

export default function TheatreTicket() {
	return (
		<>
			<Head>
				<title>Boletaso | Festival Ticket</title>
				<meta name='description' content='' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				{/* Hero Page */}
				<PageTicketHero
					header='Music Festival Tickets'
					description='While music festivals have become a way of life for many today, the history of these popular events dates back further than you may think. In fact, ancient Greek civilizations held musical gatherings as far back as the 6th century B.C. One of the first music festivals introduced in Western culture was Rhode Island’s Newport Jazz Festival, founded in 1954.'
					image='/images/morePage/banner/FestivalMain.png'
				/>

				{/* Trending Slider */}
				<TrendingSliderWithoutImage
					sliderHeader='Events near American Fork, UT'
					sliderData={theatreTrendingData}
					sliderRef='moreFestivalTrendSlider'
				/>

				{/* Category Slider */}
				<ImageSliderNoDetail
					sliderHeader='Popular Reggae Shows'
					sliderData={festivalCategoryData}
					sliderRef='moreFestivalCategoriesSlider'
				/>

				{/* Grid Events and Performer*/}
				<Container>
					<Wrapper>
						<GridContainer>
							<Grid container spacing={8} justifyContent='space-between'>
								<Grid item xs={12} sm={8} md={8}>
									<EventContainer>
										<EventList sectionHeader='All Shows' dataList={FestivalEventData} />
									</EventContainer>
								</Grid>
								<Grid item xs={12} sm={4} md={4}>
									<PerformerContainer>
										<PerformerList sectionHeader='Top Artists' dataList={avatarMoreData} />
									</PerformerContainer>
								</Grid>
							</Grid>
						</GridContainer>
					</Wrapper>
				</Container>
			</main>
		</>
	);
}
