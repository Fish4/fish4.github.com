---
layout: post
title: "Summary of Meeting 2"
blogger: "Eric"
tagline: "Engine, Picture of Game"
description: "Discussed about which engine to use, basic picture of the game."
category: "Weekly Meeting"
tags: []
---
{% include JB/setup %}

<p>
    To summarize the meeting, we have a couple things settled:
</p>
<ol>
    <li> Platform --> <b>Android</b> (Aiming at Tablet) </li>
    <li> Game Engine --> <b>Unity</b> (Reason will be explained later) </li>
    <li> Basic Idea of the game --> Simultaneous Strategy game starting with a dual system where there is attacker side and defender side. </li>
</ol>
<p>
    And here is the assignment for next week!
</p>
<ul>
    <li> Eric --> Unit Variables Manipulation </li>
    <li> Randy --> Level generation </li>
    <li> Soto --> Turn based system </li>
    <li> Young --> User Interface </li>
</ul>

<h5> Why do we choose android platform? </h5>
<p>
    Main reason why we pick android platform over others is that we haven't seen any what is called <b>Hardcore</b> games in google play market. In other word, most of games on android market are casual games. Therefore, we want to take the challenge to make a kind of intense game to put on google play.
</p>

<h5> Why Unity? </h5>
<p>
    According to the researched we had earlier on the UDK(Unreal Development Kit), UDK does not really fit into what we want to develop initially. For instance, UDK does not have a free license for Android deployment. Therefore, we decide to switch to another popular game engine, Unity. Unity, so far, is a choice for our strategy game to deploy onto Android. However, this also means that we are 1 week behind due to switch of the game engine. Hopefully, we can catch up later.
</p>
<h5> What is the game? </h5>
<p>
    First of all, this game would be more like a <b>resource control based</b> game instead of just a intense combat system game. On the other word, we want more <b>Strategy</b> element instead of pure <b>tactic</b> game. It doesn't mean you are building anything without combat, but you have to control limited amount of units and resources to achieve the victory. Reason is as followed: since we are developing on tablet, it is better to control small amount of unit, but each unit counts to avoid performance issue and issues related to complexity. <br>
    In more specific example, both player would start with a pre-set unit on the selected spots on the map in order to avoid boring starting phases. Then, according to their opponent's strategy, they can customize their ship due to their judgement.
</p>
<h6> Customize Ships? </h6>
<p>
    To start up, there are 3 types of basic units(ships).
</p>
<ol>
    <li> Offense type </li>
    <li> Defense type </li>
    <li> Utility type </li>
</ol>
<p>
    Although, there is a type of basic unit, it does not mean this unit is bounded to this type forever. During the game, you can customize your spaceship by going to the factory to 'upgrade'(tier up) your unit.
</p>
<h6> Theme, Environment </h6>
<p>
    Game will use a hexagon tile grid as a level(map) as being demonstrated in the project page. We are picturing the game to be on the space as the map with spaceship as unit to combat. Since it is spaceship as unit, we will also have a 'factory' as a resource point for player to spend money upgrading their ships instead of leveling up like traditional Role-Playing element. And of course, space would have 'Aestroid field', 'Black hole' all kind of environments dynamically!
</p>
<h6> Game mode </h6>
<p>
    To make game more intense and interesting, we come up with a side vs side system(i.e. attacker vs defender). Attacker will have like initial resource advantages over the defender. On the other side, defender side will have positional advantages over the attacker side.
</p>
<h6> Victory condition </h6>
<p>
    Goal for attacker/defender is to: 
</p>
<ol>
    <li> Finish/Protect the <b>Base</b>, which is the main objective of the game </li>
    <li> Elimate all the enemy on the field </li>
</ol>
<p>
    
</p>