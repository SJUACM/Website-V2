"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../../components/3d-card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { helpfulWebsites, Resource } from "@/app/resources/data";

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

export default function HelpfulWebsites() {
  return (
    <div className="text-center items-center justify-center max-w-7xl mx-auto px-8">
      <div className="p-8">
        <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-16">
          Explore these carefully curated websites to enhance your learning and development journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {helpfulWebsites.map((resource: Resource, index: number) => (
            <ResourceCard key={index} resource={resource} />
          ))}
        </div>
      </div>
    </div>
  );
}