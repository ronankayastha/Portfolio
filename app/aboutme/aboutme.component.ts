import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit{
myData: string [] [] = [
['Name:','Ronan Kayastha'],
['DOB:','30/09/2003'],
['Work Exp:', '18 Years'],
['Education:',' Diploma(2023)'],
['Interests','Singing'],
];
aboutMe: string[] = [
  'Hi, I am Ronan Kayastha, a dedicated  and skilled software engineer. With a passion for problem-solving and a keen eye for detail, I thrive in the dynamic world of software development. I possess a solid technical backgroundand extensive experience in designing and implementing innovative software solutions.',

 ' As a software engineer, I excel at translating complex requirements into functional and efficient code. I am proficient in multiple programming languages and frameworks, allowing me to adapt quickly to different project needs. With a strong understanding of software development methodologies, I am adept at writing clean, modular, and maintainable code that adheres to industry best practices.',
  
  'Collaboration is a cornerstone of my approach, as I enjoy working closely with cross-functional teams, including product managers, designers, and quality assurance professionals. I am an effective communicator, capable of translating technical concepts to non-technical stakeholders, fostering a collaborative environment, and ensuring everyone is aligned towards achieving project goals.',
  
  'In addition to my technical expertise, I possess a continuous learning mindset, staying up-to-date with the latest trends and advancements in software engineering. This allows me to leverage cutting-edge technologies and industry-standard tools to enhance the quality and performance of the software I develop.',
  
 ' I take pride in delivering high-quality software solutions that meet the needs of end-users while adhering to project timelines and budgets. My goal is to contribute to the success of projects by creating robust, scalable, and user-friendly software applications that drive innovation and make a positive impact.',
  
  'I am excited about the endless possibilities that software engineering offers and look forward to tackling new challenges, embracing emerging technologies, and collaborating on projects that push the boundaries of what is possible in the digital world.',
]
constructor() {}
ngOnInit(): void{

}
}
