# blackboard
Name of the project: My Web School<br /><br />
Members and their github account name:<br />
Christopher Licata (cmlicata)<br />
Shuo Peng (ShuoPeng)<br />
Bojun Sun (bojunsun)<br />
QunWu (Qun Wu)<br /><br />
Summary of the project: This project aims to do a blackboard clone. We have instructors and students. Both of them can manage their courses online. This project will help instructors to post classes and assignments. Students will see the basic information of their courses as well as submit their assignments.<br /><br />
List of technologies to be used and reason for your selection <br />
1. Java Spring  Backend/Computational<br />
Supports Hibernate and because it's AWESOME :-)<br />
2. Hibernate  ORM<br />
Makes it a lot easier to map objects to database and makes coding a lot more simple because you don't have to wrtie a lot of different sql statements. <br />
3. Angular Frontend<br />
State of the Art.  Efficient and easily connects with backend technologies.  Component-based. <br />
http://larseidnes.com/2014/11/05/angularjs-the-bad-parts/<br />
4. MySQL   Database<br />
Very Tabular Data shown in many tables in many views of the application.  Plus type safety prevents any stupidity from happening.  NEVER TRUST USER INPUT. <br /><br />

List of functionalities:<br/>
1. Instructor<br />
 1. Attributes:<br />
    1. instructor_id<br />
    2. fname<br />
    3. lname<br />
    4. email<br />
    5. password<br />
    6. school_id<br />
  2. User Stories: <br />
    As an instructor I should be able to... <br />
      1. Create a course<br />
      2. Grade a student's assignment<br />
      3. Submit files/assignments to My WebSchool<br />
      4. Post/Edit Syllabus <br />
      5. After Max Capacity, can add a student to the course. Like Signing an RTF form<br />
      6. View Student's Files that they upload<br />
 <br />

2. Student<br />
 1. Attributes:<br />
   	1. student_id<br />
	2. fname<br />
	3. lname<br />
	4. role_id<br />
	5. course_ranking
	6. gpa?
	7. email
	8. password
	9. school_id
 2. User Stories <br />
	As an student I should be able to... <br />
		1. Enroll in a course<br />
		2. Drop/Change a course<br />
		3. View assignments<br />
		4. Submit files/assignments to My WebSchool<br />
		5. View Syllabus <br />
		6. After Max Capacity, can ask professor for admittance <br />
		7. View Files that they upload<br />
		8. View Grades<br />
		9. Grade assignments if I am a TA<br />

3. Course <br />
	1. course_id<br />
	2. school_id<br />
	3. instructor_id<br />
	4. name<br />
	5. subject_id<br />
	6. location<br />
	7. syllabus<br />
	8. start_date<br />
	9. end_date<br />
	10. num_of_credits<br />
	11. max_capacity<br />

4. School 
	1. school_id
	2. name
	3. description
	4. num_of_students
	5. location
	6. num_of_instructors
5. Assignment
	1. assignment_id
	2. course_id
	3. assigned_date
	4. due_date
	5. name
	6. file_url
	7. instructions
	8. state: in class, out of class
	9. type: group, individual
6. Grade 
	1. grade_id
	2. assignment_id
	3. student_id
	4. grade
	5. file_url
	6. submitted_date
	7. submitted_time
	8. state: needs grading, graded
7. Semester
	1. semester_id
	2. semester_name
8. Role
	1. role_id
	2. role_name


