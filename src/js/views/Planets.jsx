import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

// Custom Componet que muestra las Cards de los planetas
import { CardPlanets } from "../views/CardPlanets.jsx";


export const Planets = () => {
	const { store, actions } = useContext(Context);
	// Traemos los planets del store
	const planets = store.planets;
    // const selectPlanet = store.selectPlanet;

	return (
		<div className="container bg-dark">
            <h1 className="text-light text-center pt-4">Planets</h1>
			<div className="row row-cols-1 row-cols-md-3 g-4">
				{   planets.map((e, i)=>{
                        let card = <CardPlanets key= {i} id={i+1} name = {e.name} population = {e.population} terrain = {e.terrain} climate = {e.climate} orbiltal_period = {e.orbiltal_period} rotation_period = {e.rotation_period} diameter = {e.diameter}/>
                        return card;
                    })
                }
			</div>
		</div>
	);
};
