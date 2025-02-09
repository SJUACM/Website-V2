"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { CardBody, CardContainer, CardItem } from "../../components/3d-card";

interface Resource {
  title: string;
  description: string;
  link: string;
  icon?: IconProp;
}

// Reference the interview resources from the main resources page
const interviewResources = [
  {
    title: "Python Course for Beginners",
    description: "A 4-hour-long free course that teaches you all the Python fundamentals.",
    link: "https://www.youtube.com/watch?v=rfscVS0vtbw",
  },
  {
    title: "NeetCode",
    description: "One of the best websites to use for technical interview prep. NeetCode provides a roadmap to help you practice for those interviews.",
    link: "https://www.youtube.com/c/neetcode",
  },
  {
    title: "LeetCode",
    description: "The most popular platform for technical interview preparation with thousands of coding problems and company-specific questions.",
    link: "https://leetcode.com",
  },
  {
    title: "Blind 75 LeetCode Questions",
    description: "A curated list of 75 most important coding interview questions in tech interviews.",
    link: "https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions",
  },
  {
    title: "HackerRank",
    description: "Practice coding, prepare for interviews, and get hired. Great platform for beginners with structured learning paths.",
    link: "https://www.hackerrank.com",
  },
  {
    title: "AlgoExpert (Free Problems)",
    description: "Platform with high-quality coding interview questions. Some problems are free to access!",
    link: "https://www.algoexpert.io",
  },
  {
    title: "GeeksforGeeks",
    description: "Comprehensive resource for computer science concepts, coding problems, and interview preparation materials.",
    link: "https://www.geeksforgeeks.org",
  },
  {
    title: "InterviewBit",
    description: "Free platform offering programming interview questions and a structured study plan for interview preparation.",
    link: "https://www.interviewbit.com",
  },
  {
    title: "Project Euler",
    description: "Collection of computational problems intended to be solved with computer programs. Great for improving problem-solving skills.",
    link: "https://projecteuler.net",
  },
  {
    title: "CSES Problem Set",
    description: "A collection of algorithmic programming problems to help you master common algorithms and data structures.",
    link: "https://cses.fi/problemset",
  }
  // ... rest of the interview resources
];

function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-black/40 relative group/card dark:hover:shadow-2xl dark:hover:shadow-red-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[280px] h-[200px] rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-200 mb-4"
        >
          {resource.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-400 text-sm mb-4"
        >
          {resource.description}
        </CardItem>
        <CardItem translateZ="40" className="absolute bottom-4 right-4">
          <a
            href={resource.link}
            target="_blank"
            rel="noreferrer"
            className="text-neutral-300 hover:text-red-500 transition-colors"
          >
            <FontAwesomeIcon icon={faExternalLinkAlt as IconProp} />
          </a>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

export default function InterviewPrep() {
  return (
    <div className="mt-[-100px] text-center items-center justify-center max-w-7xl mx-auto px-8">
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-8 text-white">Technical Interview Prep</h1>
        <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-16">
          Prepare for technical interviews with these carefully curated resources. From coding challenges to interview tips, we've got you covered.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interviewResources.map((resource, index) => (
            <ResourceCard key={index} resource={resource} />
          ))}
        </div>
      </div>
    </div>
  );
} 