/* ===== Content part 1: helpers, glossary, Start + Paper A ===== */
const ds=(cols,rows)=>'<table><thead><tr>'+cols.map(c=>'<th>'+c+'</th>').join('')+'</tr></thead><tbody>'+rows.map(r=>'<tr>'+r.map(c=>'<td>'+c+'</td>').join('')+'</tr>').join('')+'</tbody></table>';
const B=(id,l)=>'<button type="button" class="mk" data-id="'+id+'">'+l+'</button>';
const TABLES=['tblEvaluation','tblRun','tblRunner','tblRunningClub','tblRunResults','tblRunVolunteer','tblVolunteer'];
const RUNNER_SAMPLE=[['1','22/02/1950','2','Glover','Jack'],['3','05/10/1960','1','Morley','Danielle'],['4','15/01/1982','3','Reed','Daniel']];

const GLOSSARY=[
 ['Database','A place where information is stored in an organised way so you can find it, change it and ask questions about it.'],
 ['Table','A grid that holds one kind of thing, for example all the runners. Name it with <code>tbl</code> at the start, like <code>tblRunner</code>.'],
 ['Record','One row in a table. One runner is one record.'],
 ['Field','One column in a table. It holds one detail, for example RunnerSurname.'],
 ['Data type','The kind of data a field can hold: Short Text, Number, Date/Time, Yes/No, AutoNumber and so on.'],
 ['Primary key','A field that is different for every record, so each record can be found. Often an AutoNumber such as RunnerID.'],
 ['Foreign key','A field that holds the primary key of another table. It is how two tables link. RunningClubID in tblRunner is a foreign key.'],
 ['Relationship','A link between two tables. Most are one-to-many: one club has many runners.'],
 ['Referential integrity','A rule that stops you linking to something that does not exist, for example a runner in a club that is not in the club table.'],
 ['Validation','Automatic checks that stop silly data going in, for example a date of birth in the future. It checks data is sensible, not that it is true.'],
 ['Form','A friendly screen for typing data in. Name it with <code>frm</code>.'],
 ['Query','A question you ask your data, for example “Which runners are in Suncaster?”. Name it with <code>qry</code>.'],
 ['Report','A neat printout of data, built from a table or query. Name it with <code>rpt</code>.'],
 ['Valid test data','Normal data that should be accepted.'],
 ['Extreme (boundary) test data','Data right on the edge of what is allowed. It should still be accepted.'],
 ['Invalid test data','Data that is wrong and should be rejected.'],
 ['Screenshot (screenprint)','A picture of your screen. Use it as evidence. Windows key + Shift + S.']
];

const MISSIONS=[
/* ============================== START ============================== */
{id:'start',paper:'S',num:'Mission 0',title:'Meet Access',blurb:'The words, the screen, and how to take good screenshots.',mins:15,
 paperName:'Start here',badge:['First Steps','You know your way around Access.'],
 goal:'know the main Access words, find your way around the screen, and take clear screenshots.',
 steps:[
 {type:'learn',title:'What is Access?',intro:'Access is a program for keeping information tidy. Instead of one long list, it splits information into <b>tables</b>. Our practice database is for a running club that holds weekly 5k runs.',
  steps:['A <b>table</b> is a grid about one kind of thing, such as <b>tblRunner</b> (all the runners).','A <b>record</b> is one row. One runner is one record.','A <b>field</b> is one column. RunnerSurname is a field.','A <b>form</b> is a friendly screen to type data in. A <b>query</b> asks a question. A <b>report</b> prints results.'],
  tip:'Press the <b>Key words</b> button at the top at any time to see these words again.',
  why:'If you know these words, the exam questions make much more sense. Most marks are lost by mixing them up, not because the work is hard.'},
 {type:'quiz',title:'Word power',intro:'Quick check. There are no lives. You can try again.',qs:[
  {q:'One row in a table is called a…',opts:['Field','Record','Report','Query'],ans:1,why:'A record is one row. One runner = one record.',hint:'Think of a row as one whole person or thing.'},
  {q:'RunnerSurname is a…',opts:['Field','Record','Form','Table'],ans:0,why:'A field is one column holding one detail.'},
  {q:'Which one asks the database a question?',opts:['Form','Report','Query','Relationship'],ans:2,why:'A query is a question, such as “runners born before 1960”.'},
  {q:'Which one is the easy screen you type new data into?',opts:['Table','Form','Query','Key'],ans:1,why:'A form makes data entry friendly and safer.'}]},
 {type:'sim',title:'Practice: open the database and a table',intro:'When you open the file, Access often shows a yellow warning bar. You must press <b>Enable Content</b> or some things will not work.',
  mock:{tab:'Home',title:'partbDatabase : Database - Access',banner:'<b>SECURITY WARNING</b> Some active content has been disabled. '+B('enable','Enable Content'),nav:TABLES,navTitle:'Tables',area:'<p>Nothing is open yet. Your tables are listed on the left in the <b>Navigation Pane</b>.</p>'},
  seq:[{id:'enable',do:'Click <b>Enable Content</b> in the yellow bar.',hint:'It is the button inside the yellow warning bar, near the top.',ok:'That unlocks the database.'},
       {id:'nav-tblRunner',do:'Open the table <b>tblRunner</b> from the Navigation Pane on the left.',hint:'Look in the left-hand list for the name that starts tbl and ends Runner.',ok:'The table opens as a grid. This is called Datasheet View.'}],
  done:'In real Access you double-click the table name.'},
 {type:'sim',title:'Practice: Datasheet View and Design View',intro:'Every table has two views. <b>Datasheet View</b> shows the data. <b>Design View</b> shows the field names, data types and rules.',
  mock:{tab:'Home',nav:TABLES,navOn:'tblRunner',area:'<b>Datasheet View of tblRunner</b>'+ds(['RunnerID','RunnerDOB','RunningClubID','RunnerSurname','RunnerForename'],RUNNER_SAMPLE)},
  seq:[{id:'b-view',do:'On the <b>Home</b> tab, click <b>View</b> (far left). It switches to Design View.',hint:'The View button is the first button on the Home tab.',ok:'Design View is where you set data types and validation.'}],
  done:'You will use Design View a lot in Paper B.'},
 {type:'learn',title:'Naming and saving rules',intro:'Marks are easy to win here. Good names tell the marker you know what you are doing.',
  steps:['Start every name with what it is: <code>tbl</code> for a table, <code>qry</code> for a query, <code>frm</code> for a form, <code>rpt</code> for a report.','Use <b>no spaces</b>. Write <code>tblRunner</code>, not <code>tbl Runner</code>.','Make names meaningful: <code>qryRunnersSuncaster</code> tells you what it does. <code>Query1</code> does not.','Save often. Press <kbd>Ctrl</kbd> + <kbd>S</kbd>. Access asks for a name the first time.'],
  warn:'Do not rename the tables you were given. Other things depend on those names.',
  stuck:'If you forget to save, Access usually asks when you close. Say <b>Yes</b>. If it crashes, reopen the file and check what is still there.'},
 {type:'learn',title:'Taking screenshots that score marks',intro:'In Paper B you prove your work with screenshots. Your testing template says they must be <b>readable</b> and <b>referenced to the test</b>.',
  steps:['Press <kbd>Windows</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd>. Your screen goes grey.','Drag a box around just what is needed. Include the <b>test data</b> and the <b>result or message</b>.','Open your Word evidence document and press <kbd>Ctrl</kbd> + <kbd>V</kbd> to paste.','Put the test number next to it, for example <b>Test 3</b>.'],
  tip:'<kbd>Alt</kbd> + <kbd>PrtScn</kbd> copies only the active window. Good for a form.',
  stuck:'If Windows + Shift + S does nothing, open the <b>Snipping Tool</b> from the Start menu instead.'},
 {type:'compare',title:'What a good screenshot looks like',weak:'<ul class="checks"><li>Screenshot of the whole desktop, tiny text</li><li>No test number</li><li>You cannot see what was typed</li><li>Message cut off</li></ul>',
  good:'<ul class="checks"><li>Cropped to the table or form that matters</li><li>Labelled <b>Test 3</b></li><li>You can read the test data and the Access message</li><li>Big enough to read without zooming</li></ul>',
  points:['A marker can see what you did and what happened in two seconds.','It is easy to match to the test table.']},
 {type:'check',title:'Mission 0 checklist',intro:'Before you move on:',items:['I can say what a table, record, field, form and query are.','I know to press Enable Content when I open the database.','I know Datasheet View shows data and Design View shows the setup.','I know how to take a screenshot with Windows + Shift + S.']}
 ]},

/* ============================== PAPER A ============================== */
{id:'a1',paper:'A',num:'Mission A1',title:'Spot the data',blurb:'Read a scenario and pick out the tables and fields.',mins:20,paperName:'Paper A: Plan and design',
 badge:['Data Detective','You can pick the tables and fields out of a scenario.'],
 goal:'read a scenario, pick out what needs its own table, and list the fields for each table.',
 steps:[
 {type:'learn',title:'How to read a scenario',intro:'Here is a scenario like the ones in the exam.',
  html:'<blockquote class="note"><b>Scenario.</b> A running club holds a 5k run every Saturday. Each runner has a name and date of birth, and may belong to a running club. Every run has a date and runners are timed. Volunteers help on each run, for example as a marshal, and the club records if they turned up. At the end of each year the organiser wants to know the age of the youngest and oldest runner and the average age.</blockquote>',
  steps:['Read it once all the way through.','Find the <b>things</b> the club keeps information about. These are usually nouns: <b>runner</b>, <b>run</b>, <b>volunteer</b>, <b>running club</b>. Each one usually becomes a table.','Find the <b>details</b> about each thing: name, date of birth, date, time. Each detail becomes a field.','Find the <b>questions</b> the organiser wants answered. They tell you what you must be able to find out (queries).'],
  tip:'Use two highlighter colours. One for things (tables), one for details (fields).',
  why:'A good plan starts from the scenario. Markers award marks when your tables and fields clearly come from what the scenario says.'},
 {type:'sort',title:'Game: table or field?',intro:'Sort each item. Is it a <b>table</b> (a thing we store information about) or a <b>field</b> (one detail about a thing)?',
  buckets:['Table (a thing)','Field (a detail)'],
  items:[{t:'Runner',b:0,why:'A runner is a thing. We store lots of details about it.'},{t:'RunnerSurname',b:1,why:'A surname is one detail about a runner.'},{t:'Run',b:0,why:'Each run is a thing with its own date.'},{t:'RunDate',b:1,why:'The date is one detail of a run.'},{t:'Volunteer',b:0,why:'Volunteers are people with their own details.'},{t:'VolunteerTelephone',b:1,why:'A phone number is one detail.'},{t:'RunningClub',b:0,why:'Clubs are a thing. Many runners can share one club.'},{t:'RunnerTime',b:1,why:'The time is a detail of a runner on a run.'}],
  win:'You are thinking like a database designer.'},
 {type:'compare',title:'What good looks like: tables and fields list',intro:'Here is a planning list for the scenario.',
  weak:'<table class="mini"><tr><th>Table</th><th>Fields</th></tr><tr><td>Info</td><td>name, date, time, club, volunteer, phone, age, stuff</td></tr></table><p>Everything dumped in one table. Names are vague.</p>',
  good:'<table class="mini"><tr><th>Table</th><th>Fields</th></tr><tr><td>tblRunner</td><td>RunnerID, RunnerSurname, RunnerForename, RunnerDOB, RunningClubID</td></tr><tr><td>tblRunningClub</td><td>RunningClubID, RunningClubName</td></tr><tr><td>tblRun</td><td>RunID, RunDate, AfterRunMeet</td></tr><tr><td>tblRunResults</td><td>RunID, RunnerID, RunnerTime</td></tr><tr><td>tblVolunteer</td><td>VolunteerID, VolunteerLastName, VolunteerTelephone, DateOfBirth</td></tr></table>',
  points:['One table for each thing.','Field names have no spaces and say what they hold.','An ID field in each table to tell records apart.','Age is <b>not</b> stored. It can be worked out from the date of birth, so it never goes out of date.']},
 {type:'spot',title:'Game: spot the planning mistakes',intro:'A student wrote this plan. Tick the mistakes.',
  show:'<table class="mini"><tr><th>Table</th><th>Fields</th></tr><tr><td>tblRunner</td><td>Runner Name, Age, DateOfBirth, ClubName</td></tr><tr><td>tblRun</td><td>RunDate, Time</td></tr></table>',legend:'Which of these are problems?',
  items:[{t:'Age is stored as well as DateOfBirth',bad:true,why:'Age changes every year. Store the date of birth and work age out.'},{t:'“Runner Name” has a space and joins first name and surname',bad:true,why:'Split into RunnerForename and RunnerSurname so you can sort and search.'},{t:'tblRunner has no ID field',bad:true,why:'Every table needs a primary key such as RunnerID.'},{t:'The table is called tblRunner',bad:false,why:''},{t:'RunDate holds the date of each run',bad:false,why:''}],
  stuck:'There are three problems.'},
 {type:'check',title:'Mission A1 checklist',items:['I highlighted things (tables) and details (fields) in the scenario.','Each table has an ID field.','Field names have no spaces and are specific.','I did not store something that can be worked out, like age.']}
 ]},

{id:'a2',paper:'A',num:'Mission A2',title:'Tables and data types',blurb:'Choose the right data type and write a data dictionary.',mins:25,paperName:'Paper A: Plan and design',
 badge:['Type Master','You choose the right data type every time.'],
 goal:'choose the right data type for every field and write it up in a clear data dictionary.',
 steps:[
 {type:'learn',title:'Data types in plain English',intro:'Every field must hold one data type. The right choice stops wrong data going in.',
  html:'<div class="tblwrap"><table class="t"><thead><tr><th>Data type</th><th>Use it for</th><th>Example</th></tr></thead><tbody><tr><td><b>Short Text</b></td><td>Names, phone numbers, short words</td><td>Glover, 0113 4960894</td></tr><tr><td><b>Long Text</b></td><td>Lots of writing</td><td>A plan or a comment</td></tr><tr><td><b>Number</b></td><td>Numbers you can calculate with, and foreign keys</td><td>Age in years, RunningClubID</td></tr><tr><td><b>Date/Time</b></td><td>Dates and times</td><td>22/02/1950, 00:25:30</td></tr><tr><td><b>Yes/No</b></td><td>Only two answers, a tick box</td><td>Did the volunteer attend?</td></tr><tr><td><b>AutoNumber</b></td><td>Primary keys. Access counts 1, 2, 3 for you</td><td>RunnerID</td></tr><tr><td><b>Currency</b></td><td>Money</td><td>£4.50</td></tr></tbody></table></div>',
  warn:'Phone numbers are <b>Short Text</b>, not Number. A Number would delete the 0 at the start.',
  why:'Choosing a data type is a validation step. Access refuses letters in a Date/Time field.'},
 {type:'quiz',title:'Pick the data type',qs:[
  {q:'VolunteerTelephone (for example 0113 4960894)',opts:['Number','Short Text','Date/Time','AutoNumber'],ans:1,why:'You never calculate with a phone number, and a Number would drop the leading 0.'},
  {q:'RunDate (for example 06/05/2023)',opts:['Short Text','Number','Date/Time','Yes/No'],ans:2,why:'Date/Time lets Access check it is a real date and sort in date order.'},
  {q:'AfterRunMeet (did people meet after the run?)',opts:['Yes/No','Short Text','Number','Currency'],ans:0,why:'Only two answers. A tick box.'},
  {q:'RunnerID (a different number for each runner)',opts:['Short Text','Long Text','AutoNumber','Yes/No'],ans:2,why:'AutoNumber gives each record its own unique number, which is perfect for a primary key.'}]},
 {type:'build',title:'Build the data dictionary: tblVolunteer',scenario:'Fill in the data type and key for each field. This is what you would write in a Paper A data dictionary.',table:'tblVolunteer',
  fields:[{n:'VolunteerID',type:'AutoNumber',key:'Primary Key',why:'Unique number for each volunteer.',hint:'Think: unique number that Access creates.'},
          {n:'VolunteerLastName',type:'Short Text',key:'Not a key',why:'A name is text.',hint:'A name is made of letters.'},
          {n:'VolunteerTelephone',type:'Short Text',key:'Not a key',why:'Keeps the leading 0.',hint:'Do you calculate with a phone number?'},
          {n:'DateOfBirth',type:'Date/Time',key:'Not a key',why:'A real date that Access can check and sort.',hint:'It is a date.'}],
  win:'You could now write this into a table with an example for each row.'},
 {type:'build',title:'Build the data dictionary: tblRunVolunteer',scenario:'This table records which volunteer helped at which run. It has <b>foreign keys</b>: they point to other tables. Foreign keys are Number fields.',table:'tblRunVolunteer',
  fields:[{n:'RunDetailsID',type:'AutoNumber',key:'Primary Key',why:'Unique number for each row.',hint:'It identifies the row.'},
          {n:'VolunteerAttended',type:'Yes/No',key:'Not a key',why:'Attended or did not. Two answers.',hint:'Two answers only.'},
          {n:'RunID',type:'Number',key:'Foreign Key',why:'Links to tblRun. It matches the type of RunID, so it is a Number.',hint:'It links to another table.'},
          {n:'VolunteerID',type:'Number',key:'Foreign Key',why:'Links to tblVolunteer.',hint:'It links to another table.'}],
  win:'A foreign key has the same kind of data as the primary key it points to.'},
 {type:'compare',title:'What good looks like: a data dictionary',intro:'A data dictionary lists every field. Markers like it complete and consistent.',
  weak:'<table class="mini"><tr><th>Field</th><th>Type</th></tr><tr><td>Name</td><td>text</td></tr><tr><td>Phone</td><td>number</td></tr><tr><td>Date</td><td>date</td></tr></table><p>No table name, no key, no sizes, phone as number.</p>',
  good:'<table class="mini"><tr><th>Field</th><th>Data type</th><th>Size</th><th>Key</th><th>Example</th></tr><tr><td>VolunteerID</td><td>AutoNumber</td><td>Long Integer</td><td>PK</td><td>1</td></tr><tr><td>VolunteerLastName</td><td>Short Text</td><td>30</td><td>-</td><td>Charlton</td></tr><tr><td>VolunteerTelephone</td><td>Short Text</td><td>13</td><td>-</td><td>0113 4960894</td></tr><tr><td>DateOfBirth</td><td>Date/Time</td><td>-</td><td>-</td><td>01/02/1971</td></tr></table>',
  points:['Includes the table name above it, for example tblVolunteer.','Shows key, size and a real example for every field.','Uses the correct Access names for the data types.']},
 {type:'check',title:'Mission A2 checklist',items:['Every field has a data type that fits the data.','Phone numbers are Short Text.','Each table has a primary key.','Foreign keys are marked.','I included an example for each field.']}
 ]},

{id:'a3',paper:'A',num:'Mission A3',title:'Keys and relationships',blurb:'Link tables with one-to-many relationships.',mins:25,paperName:'Paper A: Plan and design',
 badge:['Link Master','You can link tables the right way round.'],
 goal:'say which side is “one” and which is “many”, and show the links between tables.',
 steps:[
 {type:'learn',title:'One-to-many in 4 steps',intro:'Tables are linked so you do not repeat information. One club has <b>many</b> runners. That is a <b>one-to-many</b> relationship.',
  steps:['Find the table where each item appears <b>once</b>. That is the <b>ONE</b> side. Example: tblRunningClub. Each club is listed once.','Find the table where the item can appear <b>lots of times</b>. That is the <b>MANY</b> side. Example: tblRunner. Lots of runners can be in the same club.','The ONE side has the <b>primary key</b> (RunningClubID).','The MANY side holds a copy of it. That copy is the <b>foreign key</b> (RunningClubID in tblRunner).'],
  tip:'Try the sentence: “<b>One</b> ___ has <b>many</b> ___.” If it makes sense, you have it the right way round. One run has many results. Many runs do not belong to one result.',
  why:'Without links you would type the club name again and again. That wastes time and causes spelling mistakes.'},
 {type:'rel',title:'Game: find the links',intro:'These are pairs of fields. Decide if they are related, and which table is the <b>ONE</b> side.',
  cands:[
   {one:'tblRunningClub.RunningClubID',many:'tblRunner.RunningClubID',why:'One club has many runners. The club table is the ONE side.'},
   {one:'tblRunner.RunnerID',many:'tblRunResults.RunnerID',flip:true,why:'One runner has many results. tblRunner is the ONE side, and it is on the left here.',hint:'One runner can run many times.'},
   {one:'tblRun.RunID',many:'tblRunResults.RunID',why:'One run has many results (one per runner).'},
   {one:'tblVolunteer.VolunteerID',many:'tblRunVolunteer.VolunteerID',flip:true,why:'One volunteer can help at many runs. tblVolunteer is the ONE side.'},
   {one:'tblRunner.RunnerID',many:'tblRun.RunID',none:true,why:'A runner ID and a run ID are different things. These tables are not linked directly.',hint:'Are runners and runs the same thing?'}],
  win:'tblRunResults links runners and runs. That is called a <b>link table</b>. It has two foreign keys.'},
 {type:'compare',title:'What good looks like: an entity relationship diagram',intro:'An ERD shows the tables and the links. Here it is as text.',
  weak:'<p>A bubble diagram with lines but no labels. Nothing shows which side is one and which is many.</p><p>tblRunner — tblRun</p>',
  good:'<pre style="white-space:pre-wrap;margin:0;font-family:ui-monospace,monospace;font-size:.85rem">tblRunningClub  1 ──────── ∞  tblRunner\ntblRunner       1 ──────── ∞  tblRunResults\ntblRun          1 ──────── ∞  tblRunResults\ntblRun          1 ──────── ∞  tblRunVolunteer\ntblVolunteer    1 ──────── ∞  tblRunVolunteer</pre><p>Each line shows <b>1</b> at the one side and <b>∞</b> at the many side, with the linking field named.</p>',
  points:['Every line has a 1 and an ∞.','Primary keys are marked <b>PK</b> and foreign keys <b>FK</b>.','No unlinked tables, unless there is a good reason.']},
 {type:'quiz',title:'Check yourself',qs:[
  {q:'Which field is the foreign key in tblRunner?',opts:['RunnerID','RunningClubID','RunnerSurname','RunnerDOB'],ans:1,why:'RunningClubID points to tblRunningClub, so it is the foreign key.'},
  {q:'Why not just type the club name in tblRunner each time?',opts:['It looks nicer','You might spell it differently each time, and waste space','Access does not allow text','It makes forms harder'],ans:1,why:'Linking means the name is stored once and spelled one way.'}]},
 {type:'check',title:'Mission A3 checklist',items:['I can say which side of each link is ONE and which is MANY.','Foreign keys are marked on my plan.','My diagram has 1 and ∞ labels.','Every table is linked or I can explain why not.']}
 ]},

{id:'a4',paper:'A',num:'Mission A4',title:'Validation and input design',blurb:'Plan rules that stop bad data, and sketch a clear form.',mins:25,paperName:'Paper A: Plan and design',
 badge:['Rule Planner','You can plan validation and design a friendly form.'],
 goal:'choose the right validation for a field and design an input form that is easy to use.',
 steps:[
 {type:'learn',title:'Validation types',intro:'Validation stops silly data. It checks data is <b>sensible</b>, not that it is <b>true</b>. A date of birth of 01/01/2000 passes even if it is the wrong person.',
  html:'<div class="tblwrap"><table class="t"><thead><tr><th>Type</th><th>What it checks</th><th>Example</th></tr></thead><tbody><tr><td><b>Presence check</b></td><td>Something has been entered</td><td>RunnerSurname must not be blank</td></tr><tr><td><b>Range check</b></td><td>Between a lowest and highest value</td><td>Time between 10 and 90 minutes</td></tr><tr><td><b>Type check</b></td><td>The right kind of data</td><td>Only a date in a Date/Time field</td></tr><tr><td><b>Format check</b></td><td>Follows a pattern</td><td>Phone looks like 0113 4960894</td></tr><tr><td><b>Length check</b></td><td>Not too long or short</td><td>Surname up to 30 characters</td></tr><tr><td><b>Lookup / list</b></td><td>Only choices from a list</td><td>Club picked from a drop-down</td></tr></tbody></table></div>',
  why:'The better your validation, the fewer mistakes get into the database.'},
 {type:'sort',title:'Game: match the validation',intro:'Which validation type is each rule?',buckets:['Presence','Range','Format','Lookup / list'],
  items:[{t:'RunnerSurname cannot be left empty',b:0,why:'It checks that something has been entered.'},{t:'RunnerTime must be between 00:10:00 and 01:30:00',b:1,why:'It checks a lowest and highest value.'},{t:'VolunteerTelephone must look like 0113 4960894',b:2,why:'It follows a set pattern.'},{t:'RunningClubID is chosen from a drop-down of club names',b:3,why:'The user can only choose from the list.'},{t:'RunDate must be a date after 01/01/2023',b:1,why:'A lowest value for the date, so it is a range check.'}],win:'Remember: type + rule + message. Next you will see that in the plan.'},
 {type:'compare',title:'What good looks like: a validation plan',intro:'Plan the rule and the message the user will see.',
  weak:'<table class="mini"><tr><th>Field</th><th>Validation</th></tr><tr><td>Time</td><td>Make sure it is right</td></tr><tr><td>DOB</td><td>Validation</td></tr></table>',
  good:'<table class="mini"><tr><th>Field</th><th>Type</th><th>Rule</th><th>Message shown</th></tr><tr><td>RunnerTime</td><td>Range</td><td>Between 00:10:00 and 01:30:00</td><td>Enter a time from 00:10:00 to 01:30:00, like 00:25:30.</td></tr><tr><td>RunnerDOB</td><td>Range</td><td>Not after today</td><td>Date of birth cannot be in the future.</td></tr><tr><td>VolunteerTelephone</td><td>Format</td><td>0### #######</td><td>Enter the phone like 0113 4960894.</td></tr></table>',
  points:['Each row names the field, the type of check, the exact rule and the message.','The message tells the user <b>how to fix it</b>, with an example.']},
 {type:'form',title:'Design the input form: Add a Runner',intro:'A good form uses the right <b>control</b> for each field. Choose the best control for each.',formName:'frmRunner',
  fields:[{n:'RunnerID',label:'Runner ID',ans:'Locked text box',why:'AutoNumber fills itself in, so lock it.',hint:'Should the user type this one?'},
          {n:'RunnerForename',label:'First name',ans:'Text box',why:'The user types a name.',hint:'Typed text.'},
          {n:'RunnerSurname',label:'Surname',ans:'Text box',why:'The user types a name.',hint:'Typed text.'},
          {n:'RunnerDOB',label:'Date of birth',ans:'Text box with date picker',why:'A date picker helps the user and avoids format mistakes.',hint:'A little calendar helps.'},
          {n:'RunningClubID',label:'Running club',ans:'Combo box (drop-down list)',why:'The user picks a club name from a list. This is lookup validation.',hint:'The user must pick from existing clubs.'}]},
 {type:'learn',title:'Good form design: quick rules',intro:'When you sketch your form, mention these. Markers look for them.',
  steps:['<b>Title</b> at the top, such as “Add a runner”.','<b>Clear labels</b> next to every box, in the same place each time.','<b>Same fonts and sizes</b> everywhere. Plain and easy to read.','<b>Good contrast</b>: dark text on a light background. Never rely on colour alone.','<b>Logical order</b> and a sensible tab order, top to bottom.','<b>Buttons</b> for Save record and Close form.'],
  tip:'Say <b>why</b>: “I used a drop-down for club so users cannot misspell it.”'},
 {type:'check',title:'Mission A4 checklist',items:['Each validation rule has a type, a rule and a message.','Messages tell the user how to fix the problem.','I chose the right control for each field.','My form sketch has a title, labels, buttons and a clear layout.']}
 ]},

{id:'a5',paper:'A',num:'Mission A5',title:'Plan tests and evaluate',blurb:'Plan test data and write about how well it works.',mins:25,paperName:'Paper A: Plan and design',
 badge:['Test Planner','You can plan tests and explain your choices.'],
 goal:'plan valid, extreme and invalid tests and write a clear evaluation.',
 steps:[
 {type:'learn',title:'Three kinds of test data',intro:'A test plan says <b>what</b> you will test, <b>what data</b> you will use, and <b>what should happen</b>.',
  steps:['<b>Valid</b> data is normal and should be <b>accepted</b>. Example: 00:25:30.','<b>Extreme</b> data (also called boundary) is right on the edge and should still be <b>accepted</b>. Example: 00:10:00 and 01:30:00.','<b>Invalid</b> data is wrong and should be <b>rejected</b>. Example: 00:09:59, 12:00:00 or the word “fast”.','Always write the <b>expected result</b> before you test. That is what makes it a plan.'],
  tip:'Your teacher may say normal, boundary and erroneous. It is the same idea.'},
 {type:'order',title:'Game: put the test steps in order',intro:'Put these in the right order.',
  items:['Decide what to test and write the test data','Write the expected result for each test','Run each test in Access','Take a screenshot with the test number','Compare actual result with expected result','Fix any problem and run the test again'],win:'You can use this as your testing checklist.'},
 {type:'compare',title:'What good looks like: a test plan',weak:'<table class="mini"><tr><th>Test</th><th>Data</th><th>Expected</th></tr><tr><td>1</td><td>time</td><td>works</td></tr></table>',
  good:'<table class="mini"><tr><th>No</th><th>Test data</th><th>Type</th><th>Expected result</th></tr><tr><td>1</td><td>00:25:30</td><td>Valid</td><td>Accepted and saved</td></tr><tr><td>2</td><td>00:10:00</td><td>Extreme</td><td>Accepted and saved</td></tr><tr><td>3</td><td>00:09:59</td><td>Invalid</td><td>Rejected. Message: Enter a time from 00:10:00 to 01:30:00</td></tr><tr><td>4</td><td>fast</td><td>Invalid</td><td>Rejected. Message shown</td></tr></table>',
  points:['Each test has an exact piece of data.','Includes valid, extreme and invalid.','Expected result is specific. It says the message you expect.']},
 {type:'write',title:'Write a short evaluation',intro:'Use the real tblEvaluation data to write an evaluation. In 2023 the youngest runner was 30, the oldest 79, and the average age was 51. In 2024 they were 26, 82 and 55.',
  data:'<div class="tblwrap"><table class="t"><thead><tr><th>Year</th><th>Youngest</th><th>Oldest</th><th>Average age</th></tr></thead><tbody><tr><td>2023</td><td>30</td><td>79</td><td>51</td></tr><tr><td>2024</td><td>26</td><td>82</td><td>55</td></tr></tbody></table></div><p>Task: Explain what the figures show and say what the club could do next.</p>',
  starters:['The figures show that','This is because','In 2024 the youngest runner was','This means the club','To improve, the club could'],
  checks:[{label:'Uses a figure from the table',test:t=>/\b(26|30|51|55|79|82)\b/.test(t)},{label:'Gives a reason (because, so, this means)',test:t=>/because|this means|so that|which shows|this shows/i.test(t)},{label:'Suggests an improvement (could, should, would)',test:t=>/could|should|would|next|improve/i.test(t)},{label:'Links to the club or its runners',test:t=>/club|runner|young|children|age/i.test(t)}]},
 {type:'check',title:'Mission A5 checklist',items:['My test plan has valid, extreme and invalid data.','Every test has an expected result.','My evaluation uses real figures.','My evaluation gives a reason and an improvement.']}
 ]},

{id:'bossa',paper:'A',boss:true,num:'Boss Challenge',title:'Paper A boss quiz',blurb:'8 mixed questions. Beat the boss to earn the Paper A Champion badge.',mins:10,paperName:'Paper A: Plan and design',
 badge:['Paper A Champion','You beat the Paper A boss.'],goal:'show you can plan and design a database.',
 steps:[{type:'quiz',title:'Boss quiz',pts:15,intro:'Take your time. You can try again.',qs:[
  {q:'In a scenario, the “things” we store information about usually become…',opts:['Tables','Reports','Macros','Fields'],ans:0,why:'Each thing becomes a table.'},
  {q:'Which is the best data type for a phone number?',opts:['Number','Short Text','Yes/No','AutoNumber'],ans:1,why:'Short Text keeps the leading 0.'},
  {q:'RunningClubID in tblRunner points to tblRunningClub. It is a…',opts:['Primary key','Report','Foreign key','Query'],ans:2,why:'A foreign key is a copy of another table’s primary key.'},
  {q:'In “one club has many runners”, the ONE side is…',opts:['tblRunner','tblRunningClub','tblRunResults','tblRun'],ans:1,why:'The club appears once. Runners repeat the club.'},
  {q:'A time of 00:10:00 when the rule is “10 to 90 minutes” is…',opts:['Invalid','Extreme (boundary)','Normal','A format check'],ans:1,why:'It is right on the edge and should still be accepted.'},
  {q:'Which is the best validation message?',opts:['Wrong!','Error','Enter a time from 00:10:00 to 01:30:00, like 00:25:30.','Try again'],ans:2,why:'It says how to fix it and gives an example.'},
  {q:'Why should you not store Age as a field?',opts:['It is too long','It changes every year, so store date of birth and work it out','Access cannot store numbers','Reports cannot show it'],ans:1,why:'Age goes out of date. Date of birth never does.'},
  {q:'An evaluation point that gets good marks…',opts:['Says it was fine','Uses a figure, a reason and an improvement','Is as long as possible','Only lists the tables'],ans:1,why:'Evidence, reason and improvement is the winning combination.'}]}]}
];
/* ===== Content part 2: Paper B ===== */
const PB='Paper B: Build, test and evaluate';
const FIELDS_RUNNER=ds(['Field Name','Data Type'],[['<button type="button" class="mk" data-id="g-sel-RunnerID" aria-label="Select row RunnerID">▶</button> RunnerID','AutoNumber'],['<button type="button" class="mk" data-id="g-sel-RunnerDOB" aria-label="Select row RunnerDOB">▶</button> RunnerDOB','Date/Time'],['<button type="button" class="mk" data-id="g-sel-RunningClubID" aria-label="Select row RunningClubID">▶</button> RunningClubID','Number'],['<button type="button" class="mk" data-id="g-sel-RunnerSurname" aria-label="Select row RunnerSurname">▶</button> RunnerSurname','Short Text']]);
const PROPS='<div><b>Field Properties (General)</b></div><div class="m-row">'+B('p-format','Format')+B('p-mask','Input Mask')+B('p-default','Default Value')+B('p-valrule','Validation Rule')+B('p-valtext','Validation Text')+B('p-required','Required')+'</div>';

MISSIONS.push(
{id:'b1',paper:'B',num:'Mission B1',title:'Table structure',blurb:'Create a table in Design View and set the primary key.',mins:25,paperName:PB,activity:'Activity 4',
 badge:['Table Builder','You can build a table with the right types and a key.'],
 goal:'create a table in Design View, choose data types, set a primary key and save it with a good name.',
 steps:[
 {type:'learn',title:'Plan before you click',intro:'Look at your task. Write down, on paper, the table name and each field with its data type. This takes two minutes and stops mistakes.',
  steps:['Name the table with <b>tbl</b> at the front, no spaces.','List the fields. Give each one a name with no spaces.','Choose the data type for each (use Mission A2 to help).','Decide the primary key. It is usually an AutoNumber ID.'],
  warn:'The exam may say “do not change” something. Read each instruction carefully and only do what is asked.',
  tip:'Tick off each instruction in the task as you do it.'},
 {type:'sim',title:'Practice: open Table Design',intro:'You build tables in <b>Design View</b>. That is where you type field names and pick data types.',
  mock:{tab:'Home',nav:TABLES,navTitle:'Tables',area:'<p>You are looking at the Home tab. A table is made from the <b>Create</b> tab.</p>'},
  seq:[{id:'tab:Create',do:'Click the <b>Create</b> tab at the top.',hint:'It is the third tab: File, Home, then Create.',ok:'The Create tab has all the things you can make.'},{id:'b-tabledesign',do:'Click <b>Table Design</b>.',hint:'There is also a button called Table. You want Table Design (it gives you control).',ok:'A blank design grid opens.'}],
  done:'Now you can type field names.',stuck:'In some versions Table Design is a small icon with a ruler and pencil. Hover over it to see its name.'},
 {type:'sim',title:'Practice: set the primary key',intro:'Every table needs a primary key. We set it on the field that is different for every record.',
  mock:{tab:'Table Design',ctx:'Table Design',area:'<b>Design View of tblRunner</b>'+FIELDS_RUNNER},
  seq:[{id:'g-sel-RunnerID',do:'Click the box to the left of <b>RunnerID</b> to select that row.',hint:'The little ▶ button next to RunnerID.',ok:'The row is selected.'},{id:'b-pk',do:'Click <b>Primary Key</b> on the Table Design tab.',hint:'It has a small key picture. It is the first button.',ok:'A key appears beside RunnerID.'}],
  done:'The key shows RunnerID is the primary key.',stuck:'If the key goes on the wrong row, select the right row and click Primary Key again.'},
 {type:'build',title:'Game: finish the design of tblRunner',scenario:'This is the table you saw in Mission 0. Choose each data type and key.',table:'tblRunner',
  fields:[{n:'RunnerID',type:'AutoNumber',key:'Primary Key',why:'Unique number for each runner.',hint:'It is the unique ID.'},{n:'RunnerSurname',type:'Short Text',key:'Not a key',why:'A name is text.',hint:'Names are letters.'},{n:'RunnerForename',type:'Short Text',key:'Not a key',why:'A name is text.',hint:'Names are letters.'},{n:'RunnerDOB',type:'Date/Time',key:'Not a key',why:'A date of birth is a date.',hint:'It is a date.'},{n:'RunningClubID',type:'Number',key:'Foreign Key',why:'Points to tblRunningClub. A Number, to match the key it points to.',hint:'It links to the club table.'}],
  win:'In real Access, you would type these names in the Field Name column and pick the types from the drop-down.'},
 {type:'sim',title:'Practice: save with a good name',intro:'Save with <kbd>Ctrl</kbd> + <kbd>S</kbd>. Access asks for a table name. Use the name from your plan.',
  mock:{tab:'Table Design',ctx:'Table Design',area:'<div class="note">Save As<br>Table Name: <b>tblRunner</b><div class="m-row" style="margin-top:.4rem">'+B('qat-save','Save (Ctrl+S)')+B('dlg-ok','OK')+'</div></div>'},
  seq:[{id:'qat-save',do:'Press <b>Save</b>.',hint:'The button says Save.',ok:'Access asks for a name.'},{id:'dlg-ok',do:'Check the name is <b>tblRunner</b>, then click <b>OK</b>.',hint:'The OK button in the box.',ok:'Saved.'}],
  done:'If you see a warning about no primary key, press No and set one first.'},
 {type:'compare',title:'What good looks like: a table design',intro:'Compare the two designs of tblRunner.',
  weak:'<table class="mini"><tr><th>Field Name</th><th>Data Type</th></tr><tr><td>name</td><td>Long Text</td></tr><tr><td>dob</td><td>Short Text</td></tr><tr><td>club</td><td>Short Text</td></tr></table><p>No primary key. Date stored as text. Club typed in as text.</p>',
  good:'<table class="mini"><tr><th>Field Name</th><th>Data Type</th></tr><tr><td>🔑 RunnerID</td><td>AutoNumber</td></tr><tr><td>RunnerSurname</td><td>Short Text</td></tr><tr><td>RunnerForename</td><td>Short Text</td></tr><tr><td>RunnerDOB</td><td>Date/Time</td></tr><tr><td>RunningClubID</td><td>Number</td></tr></table><p>Key set, right types, clear names.</p>',
  points:['A primary key is set.','Dates are Date/Time, so Access can check and sort them.','Names are clear and have no spaces.']},
 {type:'check',title:'Mission B1 checklist',items:['I made the table in Design View.','Field names have no spaces.','Every data type fits the data.','The primary key is set (key symbol showing).','I saved with a tbl name.','I have a screenshot of the design view (if the task asks).']}
 ]},

{id:'b2',paper:'B',num:'Mission B2',title:'Validation rules',blurb:'Add rules and messages in Design View, then test them.',mins:30,paperName:PB,activity:'Activity 4',
 badge:['Rule Maker','You can add and test validation in Access.'],
 goal:'find the validation properties, write rules and messages, and test them.',
 steps:[
 {type:'learn',title:'Where validation lives in Access',intro:'Validation is set in <b>Design View</b>, in the <b>Field Properties</b> box at the bottom. Click a field first and its properties appear.',
  steps:['Open the table in <b>Design View</b>.','Click the field you want to protect.','Look at <b>Field Properties</b> (General tab) at the bottom.','Type the rule in <b>Validation Rule</b> and the message in <b>Validation Text</b>.','Set <b>Required</b> to <b>Yes</b> if the field must not be empty.'],
  html:'<p><b>Other useful properties:</b> <b>Field Size</b> (how many characters), <b>Input Mask</b> (a pattern), <b>Default Value</b> (filled in for you), and <b>Format</b>.</p>',
  tip:'Do just what the task asks. If it says “add a range check to RunnerTime”, do not add extra things to other fields.',
  stuck:'Rule not working? Check you are in the right field, you typed the rule in Validation <b>Rule</b> (not Text), and the data type fits.'},
 {type:'sim',title:'Practice: find the validation boxes',intro:'You are in Design View of tblRunner. Find the properties for the date of birth field.',
  mock:{tab:'Table Design',ctx:'Table Design',area:'<b>Design View of tblRunner</b>'+FIELDS_RUNNER+PROPS},
  seq:[{id:'g-sel-RunnerDOB',do:'Click the row for <b>RunnerDOB</b>.',hint:'Click the ▶ button next to RunnerDOB.',ok:'Its properties appear below.'},{id:'p-valrule',do:'Click <b>Validation Rule</b>. This is where you type the rule.',hint:'Look for the one with the word Rule.',ok:'You type something like <= Date() here.'},{id:'p-valtext',do:'Now click <b>Validation Text</b>. This is the message the user sees.',hint:'It is right under Validation Rule.',ok:'Type a helpful message here.'},{id:'p-required',do:'Last, click <b>Required</b>. Set it to Yes if the field cannot be blank.',hint:'It is the last one in the row.',ok:'Required stops a blank value.'}],
  done:'Remember to save the table afterwards.'},
 {type:'validator',title:'Game: RunnerTime range rule',field:'RunnerTime',kind:'time',example:'e.g. 00:25:30',allowBlank:false,
  story:'<b>Task:</b> runners take at least 10 minutes and at most 1 hour 30 minutes. The rule must reject times outside that range.',vtext:'Enter a time between 00:10:00 and 01:30:00.',
  opts:[{rule:'Between #00:10:00# And #01:30:00#',ok:true,fn:s=>s>=600&&s<=5400,why:'It checks both ends. 10 minutes is 00:10:00 and 90 minutes is 01:30:00.'},
        {rule:'>#00:10:00#',ok:false,fn:s=>s>600,why:'This only checks the bottom, so 05:00:00 and 12:00:00 would pass. It also rejects exactly 00:10:00.'},
        {rule:'<#01:30:00#',ok:false,fn:s=>s<5400,why:'This only checks the top, so 00:01:00 would pass.'}],
  tests:['00:25:30','00:10:00','01:30:00','00:09:59','01:30:01','abc','']},
 {type:'validator',title:'Game: RunnerDOB cannot be in the future',field:'RunnerDOB',kind:'date',example:'e.g. 15/03/1984',allowBlank:false,
  story:'<b>Task:</b> a runner cannot be born in the future. The rule must reject dates after today.',vtext:'Date of birth cannot be in the future.',
  opts:[{rule:'<=Date()',ok:true,fn:d=>d<=new Date(),why:'Date() means today. “Less than or equal to today” rejects future dates.'},
        {rule:'>=Date()',ok:false,fn:d=>d>=new Date(),why:'This is the wrong way round. It would only accept today or the future!'},
        {rule:'Between #01/01/1900# And Date()',ok:true,fn:d=>d>=new Date(1900,0,1)&&d<=new Date(),why:'Even better: it also rejects dates before 1900. Both ends are checked.'}],
  tests:['22/02/1950','01/01/2090','31/02/1990','today','']},
 {type:'validator',title:'Game: telephone format',field:'VolunteerTelephone',kind:'text',example:'e.g. 0113 4960894',allowBlank:false,
  story:'<b>Task:</b> telephone numbers should look like <code>0113 4960894</code>: a 0, three digits, a space, then seven digits.',vtext:'Enter the phone like 0113 4960894.',
  opts:[{rule:'Like "0### #######"',ok:true,fn:t=>/^0\d{3} \d{7}$/.test(t),why:'In a Like rule, # means “any one digit”. 0### ####### matches the pattern exactly.'},
        {rule:'Like "#### #######"',ok:false,fn:t=>/^\d{4} \d{7}$/.test(t),why:'This lets the first digit be anything. Phone numbers here start with 0.'},
        {rule:'Like "0###"',ok:false,fn:t=>/^0\d{3}$/.test(t),why:'This only matches four characters. It would reject full numbers.'}],
  tests:['0113 4960894','0114 4960661','01134960894','0113 49608','abcd efghijk','']},
 {type:'compare',title:'What good looks like: validation text',intro:'The message is what the user sees. Make it helpful.',
  weak:'<div class="dialogbox"><b>Microsoft Access</b>Wrong!</div><p>No help.</p><div class="dialogbox"><b>Microsoft Access</b>Error</div>',
  good:'<div class="dialogbox"><b>Microsoft Access</b>Enter a time between 00:10:00 and 01:30:00, for example 00:25:30.</div>',
  points:['Says <b>what</b> is wrong.','Says <b>how</b> to fix it.','Gives an <b>example</b>.']},
 {type:'check',title:'Mission B2 checklist',items:['I added the rule in Validation Rule and the message in Validation Text.','Required is set where needed.','I saved the table after changing it.','I tested with valid, extreme and invalid data (next mission).']}
 ]},

{id:'b3',paper:'B',num:'Mission B3',title:'Relationships',blurb:'Link the tables in the Relationships window.',mins:20,paperName:PB,activity:'Activity 4',
 badge:['Relationship Builder','You can link tables in Access.'],
 goal:'open the Relationships window, link tables and enforce referential integrity.',
 steps:[
 {type:'learn',title:'Before you link',intro:'Linking in Access is a drag from one field to another. First check these.',
  steps:['The <b>primary key</b> is on the ONE side. The <b>foreign key</b> is on the MANY side.','The two fields must have the <b>same data type</b>. AutoNumber links to Number.','You must <b>close the tables</b> before you make relationships.','Then go to <b>Database Tools</b> then <b>Relationships</b>.'],
  warn:'If Access will not let you link, check the data types and that both tables are closed.',
  why:'Relationships keep data tidy: you cannot add a runner to a club that does not exist.'},
 {type:'sim',title:'Practice: link tblRunningClub to tblRunner',intro:'You are going to link <b>RunningClubID</b> in tblRunningClub (ONE) to RunningClubID in tblRunner (MANY).',
  mock:{tab:'Home',area:'<div class="m-row"><div class="note"><b>tblRunningClub</b><br>'+B('rel-club-id','RunningClubID (PK)')+'<br>RunningClubName</div><div class="note"><b>tblRunner</b><br>RunnerID<br>'+B('rel-runner-fk','RunningClubID (FK)')+'<br>RunnerSurname</div></div><div class="note warn"><b>Edit Relationships</b><br>Relationship type: One-To-Many<br>'+B('chk-ri','☐ Enforce Referential Integrity')+' '+B('btn-create','Create')+'</div>'},
  seq:[{id:'tab:Database Tools',do:'Click the <b>Database Tools</b> tab.',hint:'It is the fifth tab.',ok:'The Relationships button is here.'},{id:'b-rel',do:'Click <b>Relationships</b>.',hint:'It has a picture of linked boxes.',ok:'The Relationships window opens.'},{id:'rel-club-id',do:'Click <b>RunningClubID</b> in <b>tblRunningClub</b> (the ONE side). In real Access you drag from it.',hint:'The one with (PK).',ok:'Picked up.'},{id:'rel-runner-fk',do:'Now click <b>RunningClubID</b> in <b>tblRunner</b> (the MANY side). Real Access: drop it here.',hint:'The one with (FK).',ok:'The Edit Relationships box opens.'},{id:'chk-ri',do:'Tick <b>Enforce Referential Integrity</b>.',hint:'The tick box in the yellow box.',ok:'Now Access will stop you adding a runner with a club that does not exist.'},{id:'btn-create',do:'Click <b>Create</b>.',hint:'The Create button at the end.',ok:'A line with 1 and ∞ appears between the tables.'}],
  done:'Check that the line shows 1 and ∞. Then take your screenshot.',stuck:'If the tables are not showing, click <b>Show Table</b> (or Add Tables) and add them first.'},
 {type:'rel',title:'Game: which links are real?',intro:'Check you can say which table is the ONE side.',
  cands:[{one:'tblRunningClub.RunningClubID',many:'tblRunner.RunningClubID',flip:true,why:'One club has many runners. tblRunningClub is the ONE side (right here).'},{one:'tblRun.RunID',many:'tblRunVolunteer.RunID',why:'One run has many volunteer rows.'},{one:'tblVolunteer.VolunteerID',many:'tblRunner.RunnerID',none:true,why:'Volunteers and runners are separate lists. They are not linked.'}],
  win:'In your screenshot, make sure each line shows 1 and ∞ and the tables are not covering each other.'},
 {type:'compare',title:'What good looks like: the Relationships window',weak:'<ul class="checks"><li>Tables piled on top of each other</li><li>Some lines missing</li><li>No 1 or ∞ so no referential integrity</li><li>Screenshot too small to read</li></ul>',
  good:'<ul class="checks"><li>Tables spread out so every field is readable</li><li>Every link has 1 and ∞</li><li>Primary keys in bold</li><li>Screenshot big enough to read</li></ul>',
  points:['Drag the tables apart before taking the screenshot.','Show the whole window, not just part of it.']},
 {type:'check',title:'Mission B3 checklist',items:['Related fields have the same data type.','Every link is ONE to MANY.','Enforce Referential Integrity is ticked.','My screenshot shows 1 and ∞ clearly.']}
 ]},

{id:'b4',paper:'B',num:'Mission B4',title:'Testing structure and validation',blurb:'Plan tests, run them and record clear evidence.',mins:35,paperName:PB,activity:'Activity 4 testing document',
 badge:['Super Tester','You can test and record evidence the way markers want.'],
 goal:'choose test data, fill in the test table and take screenshots that prove your validation works.',
 steps:[
 {type:'learn',title:'What the testing document wants',intro:'Your Activity 4 testing document is a table. Each row is one test. Read each column:',
  steps:['<b>Test No</b>: 1, 2, 3 and so on.','<b>Test data</b>: the exact data you will type.','<b>Expected result</b>: what <b>should</b> happen. Write this <b>before</b> you test.','<b>Screenshot(s)</b>: proof of the result. Show the test data in the screenshot.','<b>Last two columns</b>: only fill in if the result was <b>not</b> as expected. Explain the error and how you fixed it, with screenshots.'],
  warn:'The template says <b>“Do not carry out any testing other than that specified”</b>. Only test what the task asks. Extra tests do not get extra marks.',
  tip:'The template also says: delete rows you do not need.'},
 {type:'sort',title:'Game: which kind of test data?',intro:'The rule for <b>RunnerTime</b> is: between <b>00:10:00</b> and <b>01:30:00</b>. Sort each test value.',
  buckets:['Valid (normal): accepted','Extreme (on the limit): accepted','Invalid: rejected'],
  items:[{t:'00:25:30',b:0,why:'A normal time in the middle of the range.'},{t:'00:10:00',b:1,why:'Exactly on the lowest limit. It should be accepted.'},{t:'01:30:00',b:1,why:'Exactly on the highest limit. It should be accepted.'},{t:'00:09:59',b:2,why:'One second under the limit. It should be rejected.'},{t:'01:30:01',b:2,why:'One second over the limit. It should be rejected.'},{t:'abc',b:2,why:'Letters in a time field are the wrong type.'}],
  win:'Always include at least one valid, one extreme and one invalid test.'},
 {type:'order',title:'Game: run one test in order',intro:'Put the steps of one test in order.',
  items:['Open the table in Datasheet View','Type the test data into the field','Press Enter or click the next record','Read the message, or check the data was saved','Take a screenshot showing the data and the result','Paste it into the test table next to the right test number'],win:'Do this for every test.'},
 {type:'quiz',title:'What is the expected result?',intro:'Rule: RunnerTime between 00:10:00 and 01:30:00, message “Enter a time between 00:10:00 and 01:30:00.”',qs:[
  {q:'Test data: 00:10:00. Expected result?',opts:['Rejected with the message','Accepted and saved','Access crashes','Nothing happens'],ans:1,why:'It is on the limit, so it is accepted.'},
  {q:'Test data: 01:45:00. Expected result?',opts:['Accepted and saved','Rejected with the validation message','Saved as 01:30:00','Blank'],ans:1,why:'Over the highest limit, so it is rejected and the message shows.'},
  {q:'Test data: abc. Expected result?',opts:['Accepted','Saved as 0','Rejected: not a valid time','Rejected: no message at all'],ans:2,why:'A Date/Time field rejects letters. Access shows its own type message.'}]},
 {type:'compare',title:'What good looks like: one test row',intro:'This is how a good row in the test table looks.',
  weak:'<table class="mini"><tr><th>No</th><th>Test data</th><th>Expected</th><th>Screenshot</th></tr><tr><td>1</td><td>time</td><td>it works</td><td>(whole desktop, tiny, no test data visible)</td></tr></table>',
  good:'<table class="mini"><tr><th>No</th><th>Test data</th><th>Expected</th><th>Screenshot</th></tr><tr><td>3</td><td>00:09:59 (invalid, just under the limit)</td><td>Rejected. The message “Enter a time between 00:10:00 and 01:30:00.” shows</td><td>Screenshot 3: cropped, shows 00:09:59 typed in the field and the Access message box</td></tr></table>',
  points:['The test data is exact and says what kind of data it is.','The expected result names the message.','The screenshot is readable, cropped, and shows <b>the data used</b> and <b>the result</b>.']},
 {type:'spot',title:'Game: find the mistakes in this test table',intro:'A student filled in a test row. Tick the mistakes.',
  show:'<table class="mini"><tr><th>No</th><th>Test data</th><th>Expected</th><th>Screenshot</th></tr><tr><td>1</td><td>Put in a time</td><td>It should work</td><td>(screenshot of full screen, no data visible)</td></tr><tr><td>2</td><td>00:25:30</td><td>Accepted</td><td>(no number or label)</td></tr></table>',
  items:[{t:'Test 1 has no exact test data',bad:true,why:'It must say exactly what you typed, for example 00:25:30.'},{t:'“It should work” is a vague expected result',bad:true,why:'Say what should happen: accepted and saved, or rejected with a message.'},{t:'The screenshot does not show the test data or is not labelled',bad:true,why:'A marker must be able to see the data and match it to the test number.'},{t:'Test 2 uses an exact time and a clear expected result',bad:false,why:''}]},
 {type:'learn',title:'If a test fails: fix it and show how',intro:'Sometimes the result is <b>not what you expected</b>. That is good. It shows you tested properly.',
  steps:['Write what actually happened in the <b>Explain the error</b> column.','Say <b>why</b> it happened. Example: “I typed the rule in Validation Text, not Validation Rule.”','Fix it in Design View. Add a screenshot of the fix.','Run the same test again. Add a screenshot of the retest. Label it <b>Test 3 retest</b>.'],
  tip:'Only fill in the last columns if the result was <b>not</b> as expected. If everything passed, leave them empty.'},
 {type:'check',title:'Mission B4 checklist',items:['Every row has a test number and exact test data.','I have valid, extreme and invalid data.','Expected results say exactly what should happen.','Each screenshot is readable and shows the data and the result.','I only did the tests the task asked for.','If something failed, I explained the error and showed the fix and retest.']}
 ]},

{id:'b5',paper:'B',num:'Mission B5',title:'Input forms',blurb:'Make a form with the wizard, then improve it.',mins:35,paperName:PB,activity:'Activity 6',
 badge:['Form Designer','You can make and improve a form.'],
 goal:'create a form, change controls, add buttons, and capture the evidence for Activity 6.',
 steps:[
 {type:'learn',title:'What Activity 6 asks for',intro:'Your interface document has two input forms, (a) and (b). For <b>each</b> form you need screenshots of:',
  steps:['The form in <b>Form View</b>.','The form in <b>Design View</b>.','Any <b>code or macros</b> you used.','Enough detail to <b>fully show how the form works</b>.'],
  tip:'Make form (a) first and get it working. Then repeat for (b). Name them <code>frmRunner</code> and <code>frmRun</code> or similar.',
  why:'A form makes it easy to add data and stops mistakes, because it can use drop-downs, date pickers and buttons.'},
 {type:'sim',title:'Practice: start the Form Wizard',intro:'The Form Wizard builds a form quickly. You can improve it afterwards.',
  mock:{tab:'Home',nav:TABLES,navOn:'tblRunner',area:'<p>tblRunner is selected in the left list.</p>'},
  seq:[{id:'tab:Create',do:'Click the <b>Create</b> tab.',hint:'Third tab.',ok:'Good.'},{id:'b-formwizard',do:'Click <b>Form Wizard</b>.',hint:'If you cannot see it, look under More Forms. Here it is in the Create tab.',ok:'The wizard box opens.'}],
  done:'The wizard asks you which fields you want.'},
 {type:'sim',title:'Practice: finish the wizard',intro:'The wizard has a few screens. Here they are in one place.',
  mock:{tab:'Create',area:'<div class="note"><b>Form Wizard</b><br>Tables/Queries: <b>tblRunner</b><div class="m-row" style="margin:.4rem 0">'+B('wz-addall','&gt;&gt; Add all fields')+B('wz-next','Next')+B('wz-finish','Finish')+'</div>Layout: Columnar. Title: frmRunner</div>'},
  seq:[{id:'wz-addall',do:'Click <b>&gt;&gt;</b> to add all the fields.',hint:'The button with two arrows.',ok:'All the fields move to the right.'},{id:'wz-next',do:'Click <b>Next</b> and choose <b>Columnar</b> layout.',hint:'Next is under the arrows.',ok:'Columnar is neat for a form.'},{id:'wz-finish',do:'Name the form <b>frmRunner</b> and click <b>Finish</b>.',hint:'The last button.',ok:'The form opens in Form View.'}],
  done:'The form appears. Now you will improve it.',stuck:'If you only want some fields, use the single arrow &gt; to add one at a time.'},
 {type:'sim',title:'Practice: make the club a drop-down',intro:'In Design View you can change a plain text box into a <b>combo box</b> (drop-down list). Users then pick a club name instead of typing a number.',
  mock:{tab:'Form Design',ctx:'Form Design',area:'<b>Design View of frmRunner</b><div class="m-row">'+B('ctl-surname','RunnerSurname [text box]')+B('ctl-club','RunningClubID [text box]')+'</div><div class="note">Right-click menu:<div class="m-row">'+B('ctx-changeto','Change To ▸')+B('ctx-combo','Combo Box')+'</div></div>'},
  seq:[{id:'ctl-club',do:'Right-click the <b>RunningClubID</b> text box.',hint:'The second box.',ok:'The right-click menu opens.'},{id:'ctx-changeto',do:'Choose <b>Change To</b>.',hint:'In the menu.',ok:'A list of controls appears.'},{id:'ctx-combo',do:'Choose <b>Combo Box</b>.',hint:'In the sub-menu.',ok:'Now set its Row Source to tblRunningClub and show the club name.'}],
  done:'Set Row Source to <b>tblRunningClub</b> and Column Widths to <b>0cm;3cm</b> so the user sees names, not numbers.',stuck:'If Change To is greyed out, check you are in Design View and the control is selected.'},
 {type:'form',title:'Game: design form (b), the Add a Run form',intro:'Now try form (b), which adds a new run to <b>tblRun</b>. Choose the best control for each field.',formName:'frmRun',
  fields:[{n:'RunID',label:'Run ID',ans:'Locked text box',why:'AutoNumber fills itself.',hint:'Should the user type this one?'},{n:'RunDate',label:'Run date',ans:'Text box with date picker',why:'A date picker helps the user pick a valid date.',hint:'It is a date.'},{n:'AfterRunMeet',label:'After run meet?',ans:'Check box',why:'Yes/No fields use a check box.',hint:'Only two answers.'}]},
 {type:'sim',title:'Practice: add a Save button',intro:'Buttons make forms easier to use. Let us add a <b>Save record</b> button with a wizard.',
  mock:{tab:'Form Design',ctx:'Form Design',area:'<div class="note"><b>Command Button Wizard</b><div class="m-row" style="margin:.4rem 0">'+B('cat-record','Category: Record Operations')+B('act-save','Action: Save Record')+B('wz-finish2','Finish')+'</div></div>'},
  seq:[{id:'b-btn',do:'On the <b>Form Design</b> tab, click <b>Button</b>, then click on the form.',hint:'The Button icon in the controls group.',ok:'The wizard opens.'},{id:'cat-record',do:'Choose the <b>Record Operations</b> category.',hint:'It is on the left.',ok:'Now the actions are shown.'},{id:'act-save',do:'Choose <b>Save Record</b>.',hint:'Under Actions.',ok:'Great.'},{id:'wz-finish2',do:'Click <b>Finish</b>.',hint:'The last button.',ok:'The button appears on the form.'}],
  done:'Repeat for a <b>Close Form</b> button (Form Operations, then Close Form). Access builds a small macro behind each button. Take a screenshot of it for your evidence.',stuck:'To show the macro: click the button in Design View, open the <b>Property Sheet</b>, then the <b>Event</b> tab. Next to <b>On Click</b> it says Embedded Macro.'},
 {type:'compare',title:'What good looks like: a form',intro:'Compare the two forms.',
  weak:'<ul class="checks"><li>No title, labels like “RunnerDOB”</li><li>Club typed in as a number</li><li>Controls out of line, different sizes</li><li>No buttons, user must find the next record arrows</li><li>Evidence only shows Form View</li></ul>',
  good:'<ul class="checks"><li>Title “Add a runner” and clear labels</li><li>Club chosen from a drop-down</li><li>Date picker on the date of birth</li><li>Neat, aligned and the same size</li><li>Save record and Close buttons</li><li>Evidence shows Form View, Design View and the macros</li></ul>',
  points:['Easy for a new user to use correctly.','Fewer errors, because the form controls the data.','The evidence shows how it works, which is what the template asks for.']},
 {type:'check',title:'Mission B5 checklist',items:['Both forms (a) and (b) are made and saved with frm names.','The club uses a combo box showing names.','Dates use a date picker.','There are Save and Close buttons.','I have screenshots of Form View, Design View and macros for each form.']}
 ]},

{id:'b6',paper:'B',num:'Mission B6',title:'Interface testing',blurb:'Test your forms and record neat evidence.',mins:25,paperName:PB,activity:'Activity 7',
 badge:['Interface Inspector','You can test a form and prove it works.'],
 goal:'plan form tests, run them, and show clear evidence that the form works.',
 steps:[
 {type:'learn',title:'What interface testing means',intro:'You test that the <b>form</b> works as a user would expect. Your Activity 7 template is the same style as the structure testing table.',
  steps:['Open the form in <b>Form View</b>.','Add a <b>new record</b> with test data.','Check the drop-down shows the options. Check the date picker works.','Check the buttons do what they say.','Open the table and show that the new record is <b>there</b>.'],
  warn:'The template says <b>“Do not carry out any testing other than that specified in the activity.”</b> Read the task, test exactly that.',
  tip:'A great test shows the form with the data typed in <b>and</b> the table showing the saved record.'},
 {type:'order',title:'Game: put a form test in order',items:['Open the form in Form View','Click New record','Type the test data into each box','Click the Save record button','Open the table in Datasheet View','Screenshot the form (with data) and the table (with the new record)'],win:'Now you have two screenshots that prove it works.'},
 {type:'quiz',title:'Which test is appropriate?',intro:'Imagine the task says: “Test that a new runner can be added using frmRunner, and that the club drop-down lists the clubs.”',qs:[
  {q:'Which test is asked for?',opts:['Add a new runner using the form','Test the Relationships window','Change the font colour of the form','Delete all the data'],ans:0,why:'It is in the task. Only do what the task says.'},
  {q:'Which test is also asked for?',opts:['Open the club drop-down and show the clubs','Print a report of all runners','Compact and repair the database','Rename a table'],ans:0,why:'Showing the drop-down lists the clubs is part of the task.'},
  {q:'What should the screenshot for the first test show?',opts:['Only the Start menu','The completed form and the new record in the table','A blank form','The Access logo'],ans:1,why:'It shows the data used and the result.'}]},
 {type:'compare',title:'What good looks like: interface test evidence',weak:'<table class="mini"><tr><th>No</th><th>Test</th><th>Expected</th><th>Result</th></tr><tr><td>1</td><td>try the form</td><td>works</td><td>(one tiny screenshot)</td></tr></table>',
  good:'<table class="mini"><tr><th>No</th><th>Test data</th><th>Expected</th><th>Screenshot</th></tr><tr><td>1</td><td>Forename Sam, Surname Okafor, DOB 12/05/1990, Club Suncaster</td><td>Record saved. Appears in tblRunner with club shown as 2</td><td>1a: form with data typed in<br>1b: tblRunner showing the new row</td></tr><tr><td>2</td><td>Click the Club drop-down</td><td>Lists None, Suncaster, Newborough, Middleland</td><td>2: drop-down open</td></tr></table>',
  points:['Exact test data in the table.','Two screenshots: the input and the result.','Expected result is specific.']},
 {type:'spot',title:'Game: spot the evidence problems',show:'<p>A student submitted this for Test 1: a screenshot of a form with no data typed in, and the words “it worked”.</p>',
  items:[{t:'The screenshot shows no test data',bad:true,why:'Show the data used. “Ensure you show the test data used in the screenshot.”'},{t:'There is no screenshot of the table showing the record saved',bad:true,why:'The result has to be shown, not just described.'},{t:'“It worked” is not an explanation of the result',bad:true,why:'Describe the result: the record appears in tblRunner.'},{t:'The test was labelled with a number',bad:false,why:''}]},
 {type:'check',title:'Mission B6 checklist',items:['I only did the tests the task asks for.','Test data is exact and shown in the screenshot.','Screenshots show the input and the result.','Each screenshot is referenced to a test number.','If a test failed, I explained and showed the fix and retest.']}
 ]},

{id:'b7',paper:'B',num:'Mission B7',title:'Queries and reports',blurb:'Ask your data questions with real running club data.',mins:30,paperName:PB,activity:'Possible extra activity',
 badge:['Query Hunter','You can ask the database a question and get an answer.'],
 goal:'build a query with fields, criteria and sorting, and use totals to find the youngest, oldest and average ages.',
 steps:[
 {type:'learn',title:'What is a query?',intro:'A query is a question you ask your data. “Show me every runner from Suncaster, A to Z.” Access finds the answer for you.',
  steps:['Choose the <b>tables</b> the data comes from.','Choose the <b>fields</b> you want to show.','Add a <b>criteria</b> to filter. Only matching records appear.','Add a <b>sort</b> if the order matters.','<b>Run</b> it. Save it with a <b>qry</b> name.'],
  warn:'Your task may use different queries. This mission teaches the skills you need for whatever question you get.'},
 {type:'sim',title:'Practice: start a query',mock:{tab:'Home',nav:TABLES,navTitle:'Tables',area:'<div class="note"><b>Show Table</b><div class="m-row" style="margin:.4rem 0">'+B('qd-tblRunner','tblRunner')+B('qd-tblRunningClub','tblRunningClub')+B('qd-add','Add')+B('qd-close','Close')+'</div></div>'},
  seq:[{id:'tab:Create',do:'Click the <b>Create</b> tab.',hint:'Third tab.',ok:'Good.'},{id:'b-querydesign',do:'Click <b>Query Design</b>.',hint:'Not Query Wizard.',ok:'The Show Table box opens.'},{id:'qd-tblRunner',do:'Choose <b>tblRunner</b>.',hint:'The first table in the list.',ok:'Selected.'},{id:'qd-add',do:'Click <b>Add</b>.',hint:'Button under the list.',ok:'The table is added to the top.'},{id:'qd-close',do:'Click <b>Close</b>.',hint:'The last button.',ok:'Now you can double-click fields into the grid below.'}],
  done:'Double-click a field name to put it in the grid. The Criteria row is where you type the filter.'},
 {type:'query',title:'Challenge 1: Suncaster runners',task:'Show the <b>surname</b> and <b>forename</b> of every runner from <b>Suncaster</b>, sorted by surname A to Z.',
  cols:['RunnerSurname','RunnerForename'],crit:{f:'RunningClubName',o:'=',v:'Suncaster'},sort:{f:'RunnerSurname',d:'asc'},hint:'Tick RunnerSurname and RunnerForename. Criteria field: RunningClubName = Suncaster. Sort field: RunnerSurname, ascending.',
  win:'In Access: the criteria row of RunningClubName holds <code>Suncaster</code> and the sort row of RunnerSurname holds Ascending.'},
 {type:'query',title:'Challenge 2: older runners',task:'Show <b>forename</b>, <b>surname</b> and <b>date of birth</b> of runners born <b>before 01/01/1960</b>, with the oldest first.',
  cols:['RunnerForename','RunnerSurname','RunnerDOB'],crit:{f:'RunnerDOB',o:'<',v:'01/01/1960'},sort:{f:'RunnerDOB',d:'asc'},hint:'Criteria field: RunnerDOB, operator <, value 01/01/1960. Sort by RunnerDOB ascending, oldest first.',
  win:'In Access you type <code>&lt;#01/01/1960#</code>. Dates go between # signs.'},
 {type:'query',title:'Challenge 3: runners with no club',task:'Show the <b>surname</b> and <b>forename</b> of runners who have <b>no club</b> (the club is “None”), sorted by surname.',
  cols:['RunnerSurname','RunnerForename'],crit:{f:'RunningClubName',o:'=',v:'None'},sort:{f:'RunnerSurname',d:'asc'},hint:'Criteria field RunningClubName = None. Sort by RunnerSurname.',
  win:'“None” is one of the four clubs in tblRunningClub. It is a value, not an empty field.'},
 {type:'learn',title:'Calculations: ages and totals',intro:'Your evaluation table stores the youngest, oldest and average runner age for each year. Access can work these out with a query.',
  steps:['In a query, make a new column: <code>Age: Int((Date()-[RunnerDOB])/365.25)</code>. “Age:” is the name of the column.','Click <b>Totals</b> on the Query Design tab. A <b>Total</b> row appears.','For the Age column, change <b>Group By</b> to <b>Min</b> (youngest), <b>Max</b> (oldest) or <b>Avg</b> (average).','Run it to see the answer. Use <b>Round</b> to tidy decimals.'],
  tip:'Age is worked out each time, so it is always up to date. Store the date of birth, not the age.',
  stuck:'If you get an error, check your square brackets round the field name [RunnerDOB] and that the name matches exactly.'},
 {type:'sim',title:'Practice: Min, Max and Avg',mock:{tab:'Query Design',ctx:'Query Design',area:'<b>Query grid</b><div class="m-row">Field: Age: Int((Date()-[RunnerDOB])/365.25)</div><div class="m-row">'+B('qd-total-cell','Total row: Group By ▾')+'</div><div class="m-row">'+B('qd-min','Min')+B('qd-max','Max')+B('qd-avg','Avg')+'</div>'},
  seq:[{id:'b-totals',do:'Click <b>Totals</b> on the Query Design tab.',hint:'It has a Σ (sigma) symbol.',ok:'A Total row appears in the grid.'},{id:'qd-total-cell',do:'Click the <b>Group By</b> cell under Age.',hint:'The first button under the Field line.',ok:'A drop-down of choices opens.'},{id:'qd-min',do:'Choose <b>Min</b> to find the youngest runner.',hint:'Min means smallest.',ok:'Min of the ages gives the youngest runner.'}],
  done:'Choose Max for the oldest, and Avg for the average.'},
 {type:'compare',title:'What good looks like: a saved query',weak:'<ul class="checks"><li>Saved as Query1</li><li>Shows every field, even ones you do not need</li><li>No sort</li><li>Screenshot shows only the results</li></ul>',
  good:'<ul class="checks"><li>Saved as qryRunnersSuncaster</li><li>Only the fields asked for</li><li>Sorted as the task says</li><li>Screenshots of the Design grid <b>and</b> the results</li></ul>',
  points:['Design grid proves you did it. Results prove it worked.','A clear name tells the marker what the query is for.']},
 {type:'check',title:'Mission B7 checklist',items:['I chose only the fields asked for.','Criteria and sorting match the task.','Queries have qry names.','I have screenshots of the Design grid and the results.']}
 ]},

{id:'b8',paper:'B',num:'Mission B8',title:'Evaluate your work',blurb:'Use evidence and write about improvements.',mins:25,paperName:PB,activity:'Evaluation',
 badge:['Evaluator','You can write an evaluation that gets marks.'],
 goal:'write a clear evaluation using evidence, reasons and improvements.',
 steps:[
 {type:'learn',title:'The PEEL recipe',intro:'Use <b>PEEL</b> for every point you make.',
  steps:['<b>Point</b>: say what you found out.','<b>Evidence</b>: back it with a figure, a test result or a screenshot.','<b>Explain</b>: say <b>why</b> it matters or why it happened.','<b>Link / improve</b>: say what could be done next.'],
  tip:'Use words like <b>because</b>, <b>this means</b> and <b>could</b>. They show you are explaining, not just describing.'},
 {type:'compare',title:'What good looks like: an evaluation',intro:'Here the data is from the club evaluation table.',
  weak:'<p>The club did well. More people ran. It could be better.</p><p>No figures, no reasons, no real improvement.</p>',
  good:'<p><b>Point:</b> The runners got older between 2023 and 2024.<br><b>Evidence:</b> The average age rose from 51 to 55. The oldest runner is now 82.<br><b>Explain:</b> This is because the club did not recruit many younger runners, so the same older members aged.<br><b>Improve:</b> The club could run a children’s 1k or 2k alongside the main run, and advertise on social media to reach younger people.</p>',
  points:['Uses real figures (51, 55, 82).','Explains with “because”.','Gives a practical improvement linked to the evidence.']},
 {type:'write',title:'Your turn: write an evaluation point',intro:'Use the figures below. Write 2 to 4 sentences following PEEL.',
  data:'<div class="tblwrap"><table class="t"><thead><tr><th>Year</th><th>Youngest runner</th><th>Oldest runner</th><th>Average age</th></tr></thead><tbody><tr><td>2023</td><td>30</td><td>79</td><td>51</td></tr><tr><td>2024</td><td>26</td><td>82</td><td>55</td></tr></tbody></table></div>',
  starters:['The figures show that','This is because','This means','The club could','To improve further,'],
  checks:[{label:'Uses a figure from the table',test:t=>/\b(26|30|51|55|79|82)\b/.test(t)},{label:'Gives a reason (because, this means)',test:t=>/because|this means|so that|which shows|this shows/i.test(t)},{label:'Suggests an improvement (could, should, would)',test:t=>/could|should|would|next|improve/i.test(t)},{label:'Links to the club or runners',test:t=>/club|runner|young|children|age/i.test(t)}]},
 {type:'learn',title:'Evaluating your own database',intro:'You may also be asked how well your <b>database</b> meets the needs. Cover these:',
  steps:['<b>Does it do what the user needs?</b> Link to the scenario.','<b>Testing</b>: say how many tests passed and what you fixed.','<b>Usability</b>: forms, drop-downs, buttons, clear messages.','<b>Improvements</b>: for example a position table, more validation, or a report for the organiser.'],
  tip:'Always back a point with evidence: “All 9 of my tests passed after I fixed Test 3.”'},
 {type:'check',title:'Mission B8 checklist',items:['Each point uses PEEL.','I used real figures or test results.','I used because, this means or could.','I suggested at least one realistic improvement.']}
 ]},

{id:'bossb',paper:'B',boss:true,num:'Boss Challenge',title:'Paper B boss quiz',blurb:'8 mixed questions. Beat the boss to earn the Paper B Champion badge.',mins:10,paperName:PB,
 badge:['Paper B Champion','You beat the Paper B boss.'],goal:'show you can build, test and evaluate in Access.',
 steps:[{type:'quiz',title:'Boss quiz',pts:15,intro:'Take your time. You can try again.',qs:[
  {q:'Where do you add a validation rule in Access?',opts:['Datasheet View, in the data','Design View, in Field Properties','In the Navigation Pane','On the Create tab'],ans:1,why:'Validation Rule and Validation Text are in Field Properties in Design View.'},
  {q:'Which rule checks a time between 10 and 90 minutes?',opts:['>#00:10:00#','<#01:30:00#','Between #00:10:00# And #01:30:00#','=#00:10:00#'],ans:2,why:'Between checks both ends.'},
  {q:'You link tblRunningClub to tblRunner. Which is the ONE side?',opts:['tblRunner','tblRunningClub','Neither','Both'],ans:1,why:'One club has many runners.'},
  {q:'A test of 00:09:59 for the rule above is…',opts:['Valid','Extreme (accepted)','Invalid (rejected)','Not needed'],ans:2,why:'One second under the limit is rejected.'},
  {q:'What should a test screenshot show?',opts:['The whole desktop','The test data and the result, referenced to the test number','Only the Start menu','Nothing, a description is enough'],ans:1,why:'Readable, cropped, with test data and result.'},
  {q:'Which control is best for choosing a club on a form?',opts:['Text box','Check box','Combo box','Label'],ans:2,why:'A combo box lets the user pick from the club list.'},
  {q:'A test fails. What do you do?',opts:['Delete the test','Explain the error, fix it, retest and show screenshots','Ignore it','Change the expected result so it passes'],ans:1,why:'Explain, fix, retest. That is exactly what the template asks for.'},
  {q:'Which is the best evaluation sentence?',opts:['It was good.','The average age rose from 51 to 55 because few younger runners joined, so the club could run a children’s race.','The database has tables.','I liked Access.'],ans:1,why:'It has evidence, a reason and an improvement.'}]}]}
);
/* ===== Access Quest engine ===== */
['append','prepend','replaceChildren'].forEach(m=>{const o=Element.prototype[m];Element.prototype[m]=function(...a){return o.apply(this,a.filter(x=>x!=null&&x!==false))}});
const $=(s,r=document)=>r.querySelector(s);
const $$=(s,r=document)=>[...r.querySelectorAll(s)];
function h(tag,attrs,...kids){
  const e=document.createElement(tag);
  for(const k in (attrs||{})){const v=attrs[k];
    if(v===false||v==null)continue;
    if(k==='class')e.className=v;
    else if(k==='html')e.innerHTML=v;
    else if(k.slice(0,2)==='on')e.addEventListener(k.slice(2),v);
    else e.setAttribute(k,v===true?'':v);}
  for(const c of kids.flat()){if(c==null||c===false)continue;e.append(c.nodeType?c:document.createTextNode(c));}
  return e;
}
const store={
  get(k,d){try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}},
  set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
};
let S=Object.assign({xp:0,got:{},done:{},badges:{},chk:{}},store.get('aq-s1',{}));
let P=Object.assign({size:'1',font:'atkinson',space:'normal',pal:'auto',motion:'auto',xp:'show'},store.get('aq-p1',{}));
const saveS=()=>store.set('aq-s1',S);
const saveP=()=>store.set('aq-p1',P);
function applyPrefs(){
  const r=document.documentElement;
  r.setAttribute('data-size',P.size);
  r.setAttribute('data-font',P.font);
  r.setAttribute('data-space',P.space);
  r.setAttribute('data-motion',P.motion);
  r.setAttribute('data-xp',P.xp);
  if(P.pal==='auto')r.removeAttribute('data-pal');else r.setAttribute('data-pal',P.pal);
}
function say(msg){const l=$('#live');l.textContent='';setTimeout(()=>{l.textContent=msg},40)}

/* ----- XP, levels, badges ----- */
const LEVELS=[[0,'Rookie'],[100,'Data Cadet'],[250,'Table Builder'],[450,'Query Runner'],[700,'Database Designer'],[1000,'Access Ace']];
function level(){let i=0;LEVELS.forEach((l,n)=>{if(S.xp>=l[0])i=n});const nxt=LEVELS[i+1];return{n:i+1,name:LEVELS[i][1],next:nxt,from:LEVELS[i][0]}}
function award(key,pts,why){
  if(S.got[key])return 0;
  S.got[key]=true;S.xp+=pts;saveS();drawXP();
  say('Well done. You earned '+pts+' experience points'+(why?' for '+why:'')+'.');
  return pts;
}
function drawXP(){
  const L=level();const el=$('#xpbox');if(!el)return;
  const span=L.next?L.next[0]-L.from:1;const pct=L.next?Math.min(100,Math.round((S.xp-L.from)/span*100)):100;
  el.innerHTML='';
  el.append(h('span',{},'Level '+L.n+': ',h('b',{},L.name)),
    h('span',{class:'xpbar',role:'progressbar','aria-label':'Progress to next level','aria-valuemin':'0','aria-valuemax':'100','aria-valuenow':String(pct)},h('i',{style:'width:'+pct+'%'})),
    h('span',{},S.xp+' XP'));
}

/* ----- helpers ----- */
const details=(t,body)=>h('details',{class:'more'},h('summary',{},t),h('div',{html:body}));
const missionById=id=>MISSIONS.find(m=>m.id===id);
const stepKey=(m,i)=>m.id+':'+i;
function shuffle(a,notEqual){let b=a.slice();for(let t=0;t<9;t++){for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]]}if(!notEqual||b.join('|')!==a.join('|'))break}return b}
const fbSet=(el,kind,html)=>{el.className='fb '+(kind||'');el.innerHTML=html||''};

/* ----- practice Access screen ----- */
const RIB={
 'Home':[['b-view','View'],['b-paste','Paste'],['b-filter','Filter'],['b-sort','Ascending'],['b-find','Find'],['b-newrec','New record']],
 'Create':[['b-table','Table'],['b-tabledesign','Table Design'],['b-querywiz','Query Wizard'],['b-querydesign','Query Design'],['b-form','Form'],['b-formdesign','Form Design'],['b-formwizard','Form Wizard'],['b-report','Report'],['b-reportwiz','Report Wizard'],['b-macro','Macro']],
 'External Data':[['b-impxl','Excel'],['b-impacc','Access'],['b-imptext','Text file']],
 'Database Tools':[['b-rel','Relationships'],['b-compact','Compact and Repair'],['b-vb','Visual Basic']],
 'Table Design':[['b-pk','Primary Key'],['b-view','View'],['b-insrow','Insert Rows'],['b-delrow','Delete Rows'],['b-prop','Property Sheet'],['b-testval','Test Validation Rules']],
 'Query Design':[['b-run','Run'],['b-totals','Totals'],['b-view','View'],['b-addtbl','Show Table'],['b-sqlv','SQL View']],
 'Form Design':[['b-view','View'],['b-prop','Property Sheet'],['b-btn','Button'],['b-combo','Combo Box'],['b-textbox','Text Box'],['b-addex','Add Existing Fields']]
};
function mockEl(m,onId){
  const tabs=(m.tabs||['File','Home','Create','External Data','Database Tools']).concat(m.ctx?[m.ctx]:[]);
  let tab=m.tab||'Home';
  const tabRow=h('div',{class:'m-tabs'});
  const rib=h('div',{class:'m-rib'});
  const done=new Set();
  function drawRib(){
    tabRow.replaceChildren(...tabs.map(t=>h('button',{type:'button',class:'m-tab'+(t===tab?' on':''),'data-tab':t,'aria-pressed':String(t===tab)},t)));
    const list=RIB[tab];
    if(list)rib.replaceChildren(...list.map(([id,l])=>h('button',{type:'button',class:'mk'+(done.has(id)?' done':''),'data-id':id},l)));
    else rib.replaceChildren(h('span',{class:'m-empty'},'Nothing to practise on the '+tab+' tab. Try another tab.'));
  }
  const nav=m.nav?h('div',{class:'m-nav'},h('h4',{},m.navTitle||'All Access Objects'),...m.nav.map(n=>h('button',{type:'button',class:'mk'+(m.navOn===n?' on':''),'data-id':'nav-'+n},n))):null;
  const area=h('div',{class:'m-area',html:m.area||''});
  const root=h('div',{class:'mock',role:'group','aria-label':'Practice screen. It looks like Microsoft Access. All the buttons on it are practice buttons.'},
    h('div',{class:'m-title'},m.title||'partbDatabase : Database - Access'),
    tabRow,rib,
    m.banner?h('div',{class:'m-banner',html:m.banner}):null,
    h('div',{class:'m-body'},nav||h('div',{class:'m-nav',style:'display:none'}),area));
  if(!nav)root.querySelector('.m-body').style.gridTemplateColumns='1fr';
  root.addEventListener('click',e=>{
    const t=e.target.closest('[data-tab]');
    if(t){tab=t.getAttribute('data-tab');drawRib();onId('tab:'+tab,null);const nb=$(`[data-tab="${tab}"]`,root);if(nb)nb.focus();return}
    const b=e.target.closest('[data-id]');
    if(b){const ok=onId(b.getAttribute('data-id'),b);if(ok){done.add(b.getAttribute('data-id'));b.classList.add('done');b.setAttribute('data-ok','1')}}
  });
  drawRib();
  return root;
}

/* ----- step widgets ----- */
const W={};

W.learn=(st,ctx)=>{
  const el=h('div',{class:'stack'});
  if(st.intro)el.append(h('p',{class:'lead',html:st.intro}));
  if(st.steps){const ol=h('ol',{class:'bigsteps'});st.steps.forEach(s=>ol.append(h('li',{html:'<div>'+s+'</div>'})));el.append(ol)}
  if(st.html)el.append(h('div',{html:st.html}));
  if(st.tip)el.append(h('p',{class:'note tip',html:'<strong>Top tip:</strong> '+st.tip}));
  if(st.warn)el.append(h('p',{class:'note warn',html:'<strong>Careful:</strong> '+st.warn}));
  if(st.why)el.append(details('Why do we do this?',st.why));
  if(st.stuck)el.append(details('What if it goes wrong?',st.stuck));
  ctx.autoDone(5,'reading');
  return el;
};

W.sim=(st,ctx)=>{
  let i=0,wrong=0,total=0;
  const goal=h('div',{class:'goal'});
  const fb=h('div',{class:'fb','role':'status'});
  const hintBtn=h('button',{type:'button',class:'btn quiet sm',onclick:()=>{fbSet(fb,'no','<b>Hint:</b> '+st.seq[i].hint)}},'Give me a hint');
  function drawGoal(){
    if(i>=st.seq.length){goal.innerHTML='<b>All done.</b> '+(st.done||'');hintBtn.hidden=true;return}
    goal.innerHTML='<b>Click '+(i+1)+' of '+st.seq.length+':</b> '+st.seq[i].do;
  }
  const mock=mockEl(st.mock,(id)=>{
    if(i>=st.seq.length)return false;
    const want=st.seq[i].id;
    if(id===want){
      const msg=st.seq[i].ok||'Yes, that is right.';
      i++;total++;drawGoal();
      if(i>=st.seq.length){fbSet(fb,'ok','<b>Correct.</b> '+msg+' '+(st.done||''));ctx.complete(wrong===0?25:15,'a practice screen');}
      else fbSet(fb,'ok','<b>Correct.</b> '+msg+' Next job is above.');
      say('Correct. '+msg);
      return true;
    }
    if(id.slice(0,4)==='tab:')return false;
    wrong++;
    fbSet(fb,'no',wrong%2?'<b>Not that one. No problem, have another go.</b> Read the job above again.':'<b>Still not it.</b> '+st.seq[i].hint);
    say('Not that one. Try again.');
    return false;
  });
  drawGoal();
  return h('div',{class:'stack'},
    st.intro?h('p',{class:'lead',html:st.intro}):null,
    h('div',{class:'note',html:'<strong>Practice screen.</strong> Click the buttons like you would in Access. In real Access you sometimes double-click or drag. Here one click is enough.'}),
    goal,mock,fb,h('div',{},hintBtn),
    st.stuck?details('What if it looks different on my computer?',st.stuck):null);
};

W.quiz=(st,ctx)=>{
  const el=h('div',{class:'stack'});
  if(st.intro)el.append(h('p',{class:'lead',html:st.intro}));
  let solved=0;
  st.qs.forEach((q,qi)=>{
    const name='q'+Math.random().toString(36).slice(2,7);
    let tries=0,ok=false;
    const fb=h('div',{class:'fb',role:'status'});
    const opts=h('div',{class:'opts'});
    q.opts.forEach((o,oi)=>opts.append(h('label',{class:'opt'},h('input',{type:'radio',name,value:String(oi)}),h('span',{html:o}))));
    const btn=h('button',{type:'button',class:'btn sm',onclick:()=>{
      if(ok)return;
      const sel=$('input:checked',opts);
      if(!sel){fbSet(fb,'no','Pick an answer first, then press Check.');return}
      tries++;
      if(+sel.value===q.ans){ok=true;solved++;btn.disabled=true;$$('input',opts).forEach(x=>x.disabled=true);
        fbSet(fb,'ok','<b>Correct.</b> '+(q.why||''));
        award(stepKey(ctx.m,ctx.i)+':q'+qi,tries===1?(st.pts||10):5,'a question');
        say('Correct. '+(q.why||''));
        if(solved===st.qs.length)ctx.complete(0);
      }else if(tries>=2){ok=true;solved++;btn.disabled=true;$$('input',opts).forEach(x=>x.disabled=true);
        fbSet(fb,'no','<b>Not quite.</b> The answer is: <b>'+q.opts[q.ans]+'</b>. '+(q.why||'')+' You will get it next time.');
        say('Not quite. The answer is '+q.opts[q.ans]);
        if(solved===st.qs.length)ctx.complete(0);
      }else{fbSet(fb,'no','<b>Not quite. Have another go.</b> '+(q.hint||'Read the question again slowly.'));say('Not quite. Have another go.')}
    }},'Check answer');
    el.append(h('fieldset',{},h('legend',{html:(st.qs.length>1?(qi+1)+'. ':'')+q.q}),opts,h('div',{style:'margin-top:.6rem'},btn),fb));
  });
  return el;
};

W.sort=(st,ctx)=>{
  const el=h('div',{class:'stack'});
  if(st.intro)el.append(h('p',{class:'lead',html:st.intro}));
  let checks=0;
  const rows=st.items.map((it,ix)=>{
    const name='s'+ix+Math.random().toString(36).slice(2,6);
    const fb=h('div',{class:'fb',role:'status'});
    const seg=h('div',{class:'seg'},...st.buckets.map((b,bi)=>h('label',{},h('input',{type:'radio',name,value:String(bi)}),b)));
    const fs=h('fieldset',{},h('legend',{html:it.t}),seg,fb);
    return{it,fs,fb,seg};
  });
  rows.forEach(r=>el.append(r.fs));
  const sum=h('div',{class:'fb',role:'status'});
  const btn=h('button',{type:'button',class:'btn',onclick:()=>{
    checks++;let right=0,blank=0;
    rows.forEach(r=>{
      const sel=$('input:checked',r.seg);
      if(!sel){blank++;fbSet(r.fb,'no','Choose a group for this one.');return}
      if(+sel.value===r.it.b){right++;fbSet(r.fb,'ok','<b>Correct.</b> '+(r.it.why||''))}
      else fbSet(r.fb,'no','<b>Not quite.</b> '+(checks>=2?'It belongs in: <b>'+st.buckets[r.it.b]+'</b>. ':'Think again. ')+(checks>=2?(r.it.why||''):''));
    });
    if(right===rows.length){fbSet(sum,'ok','<b>Perfect: '+right+' out of '+rows.length+'.</b> '+(st.win||''));ctx.complete(checks===1?35:25,'sorting');say('Perfect. All correct.')}
    else{fbSet(sum,'no','<b>'+right+' out of '+rows.length+' right.</b> '+(blank?blank+' still need a group. ':'')+'Change the ones marked "Not quite", then press Check again.');say(right+' out of '+rows.length+' right.')}
  }},'Check my answers');
  el.append(btn,sum);
  return el;
};

W.spot=(st,ctx)=>{
  const el=h('div',{class:'stack'});
  if(st.intro)el.append(h('p',{class:'lead',html:st.intro}));
  if(st.show)el.append(h('div',{html:st.show}));
  let tries=0;
  const fs=h('fieldset',{},h('legend',{},st.legend||'Tick every problem you can find'));
  const boxes=st.items.map(it=>{const cb=h('input',{type:'checkbox'});const row=h('label',{class:'opt'},cb,h('span',{html:it.t}));fs.append(row);return{it,cb,row}});
  const fb=h('div',{class:'fb',role:'status'});
  const btn=h('button',{type:'button',class:'btn',onclick:()=>{
    tries++;let right=0,wrongTick=0,missed=0;
    boxes.forEach(b=>{if(b.it.bad&&b.cb.checked)right++;else if(!b.it.bad&&b.cb.checked)wrongTick++;else if(b.it.bad&&!b.cb.checked)missed++});
    if(!wrongTick&&!missed){fbSet(fb,'ok','<b>You found them all.</b><ul>'+st.items.filter(x=>x.bad).map(x=>'<li>'+x.why+'</li>').join('')+'</ul>');ctx.complete(tries===1?35:25,'spotting problems');say('You found them all.')}
    else if(tries>=2){fbSet(fb,'no','<b>Here are the problems:</b><ul>'+st.items.filter(x=>x.bad).map(x=>'<li><b>'+x.t+'</b>: '+x.why+'</li>').join('')+'</ul>');ctx.complete(5,'trying');}
    else{fbSet(fb,'no','<b>You found '+right+' of '+st.items.filter(x=>x.bad).length+'.</b> '+(wrongTick?wrongTick+' of your ticks are actually fine. ':'')+(missed?'Some are still hiding. ':'')+'Have another look.');say('Not yet. Have another look.')}
  }},'Check');
  el.append(fs,btn,fb);return el;
};

W.order=(st,ctx)=>{
  const el=h('div',{class:'stack'});
  if(st.intro)el.append(h('p',{class:'lead',html:st.intro}));
  let list=shuffle(st.items,true),tries=0;
  const ol=h('ol',{class:'bigsteps'});
  const fb=h('div',{class:'fb',role:'status'});
  function draw(){
    ol.replaceChildren(...list.map((t,ix)=>h('li',{},h('div',{},h('div',{html:t}),h('div',{class:'seg',style:'margin-top:.4rem'},
      h('button',{type:'button',class:'btn quiet sm','aria-label':'Move up: '+t.replace(/<[^>]+>/g,''),disabled:ix===0,onclick:()=>{[list[ix-1],list[ix]]=[list[ix],list[ix-1]];draw();$$('button',ol)[ix*2-2]?.focus();say('Moved up. Now position '+ix)}},'Move up'),
      h('button',{type:'button',class:'btn quiet sm','aria-label':'Move down: '+t.replace(/<[^>]+>/g,''),disabled:ix===list.length-1,onclick:()=>{[list[ix+1],list[ix]]=[list[ix],list[ix+1]];draw();$$('button',ol)[ix*2+3]?.focus();say('Moved down. Now position '+(ix+2))}},'Move down'))))));
  }
  draw();
  const btn=h('button',{type:'button',class:'btn',onclick:()=>{
    tries++;const right=list.filter((t,ix)=>t===st.items[ix]).length;
    if(right===list.length){fbSet(fb,'ok','<b>Perfect order.</b> '+(st.win||''));ctx.complete(tries===1?35:25,'ordering');say('Perfect order.')}
    else if(tries>=3){list=st.items.slice();draw();fbSet(fb,'no','<b>Here is the right order.</b> Read it through, then move on. You can do it next time.');ctx.complete(5,'trying')}
    else{fbSet(fb,'no','<b>'+right+' of '+list.length+' are in the right place.</b> Keep moving them and check again.');say(right+' of '+list.length+' in the right place.')}
  }},'Check the order');
  el.append(ol,btn,fb);return el;
};

W.build=(st,ctx)=>{
  const TYPES=['Choose...','Short Text','Long Text','Number','Date/Time','Currency','AutoNumber','Yes/No'];
  const KEYS=['Not a key','Primary Key','Foreign Key'];
  const el=h('div',{class:'stack'});
  if(st.intro)el.append(h('p',{class:'lead',html:st.intro}));
  if(st.scenario)el.append(h('p',{class:'note',html:st.scenario}));
  const rows=st.fields.map(f=>{
    const ts=h('select',{class:'sel','aria-label':'Data type for '+f.n},...TYPES.map(t=>h('option',{value:t},t)));
    const ks=h('select',{class:'sel','aria-label':'Key type for '+f.n},...KEYS.map(t=>h('option',{value:t},t)));
    const fb=h('div',{class:'fb',role:'status'});
    return{f,ts,ks,fb,tr:h('tr',{},h('td',{},h('b',{},f.n)),h('td',{},ts),h('td',{},ks),h('td',{},fb))};
  });
  el.append(h('div',{class:'tblwrap'},h('table',{class:'t'},h('caption',{class:'sr-only'},'Design for '+st.table),h('thead',{},h('tr',{},h('th',{},'Field Name'),h('th',{},'Data Type'),h('th',{},'Key'),h('th',{},'Feedback'))),h('tbody',{},...rows.map(r=>r.tr)))));
  let tries=0;const sum=h('div',{class:'fb',role:'status'});
  const btn=h('button',{type:'button',class:'btn',onclick:()=>{
    tries++;let right=0;
    rows.forEach(r=>{
      const okT=r.ts.value===r.f.type,okK=r.ks.value===r.f.key;
      if(r.ts.value==='Choose...'){fbSet(r.fb,'no','Choose a data type.');return}
      if(okT&&okK){right++;fbSet(r.fb,'ok','<b>Correct.</b> '+(r.f.why||''))}
      else{
        let m='<b>Not quite.</b> ';
        if(!okT)m+='Check the data type. ';
        if(!okK)m+='Check the key. ';
        if(tries>=2)m+='Answer: '+r.f.type+', '+r.f.key+'. '+(r.f.why||'');
        else if(r.f.hint)m+=r.f.hint;
        fbSet(r.fb,'no',m);
      }
    });
    if(right===rows.length){fbSet(sum,'ok','<b>Your design for '+st.table+' is spot on.</b> '+(st.win||''));ctx.complete(tries===1?40:30,'a table design');say('Table design correct.')}
    else{fbSet(sum,'no','<b>'+right+' of '+rows.length+' rows are right.</b> Fix the rows with a "Not quite" and check again.');say(right+' of '+rows.length+' rows right.')}
  }},'Check my table');
  el.append(btn,sum);return el;
};

const VPARSE={
  time(v){const m=/^(\d{1,2}):(\d{2}):(\d{2})$/.exec(v.trim());if(!m)return null;if(+m[2]>59||+m[3]>59)return null;return +m[1]*3600+ +m[2]*60+ +m[3]},
  date(v){const m=/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(v.trim());if(!m)return null;const d=new Date(+m[3],+m[2]-1,+m[1]);if(d.getMonth()!==+m[2]-1)return null;return d},
  text(v){return v}
};
W.validator=(st,ctx)=>{
  const el=h('div',{class:'stack'});
  if(st.intro)el.append(h('p',{class:'lead',html:st.intro}));
  const name='v'+Math.random().toString(36).slice(2,6);
  const fb=h('div',{class:'fb',role:'status'});
  const opts=h('div',{class:'opts'});
  st.opts.forEach((o,oi)=>opts.append(h('label',{class:'opt'},h('input',{type:'radio',name,value:String(oi)}),h('span',{},h('code',{class:'rule'},o.rule)))));
  let chosen=null,tested=0,rejected=0,doneOK=false;
  const testBox=h('div',{class:'stack',hidden:true});
  const out=h('div',{class:'stack','aria-live':'polite'});
  const inp=h('input',{class:'inp',type:'text',id:name+'i',autocomplete:'off',placeholder:st.example||''});
  function run(val){
    const o=st.opts[chosen];const pv=VPARSE[st.kind](val);
    let accepted,msg;
    if(val===''&&!st.allowBlank){accepted=false;msg='You must enter a value in this field.'}
    else if(pv===null){accepted=false;msg='The value you entered isn\'t valid for this field.'}
    else if(o.fn(pv)){accepted=true}
    else{accepted=false;msg=st.vtext}
    tested++;if(!accepted)rejected++;
    const box=accepted?h('div',{class:'fb ok',html:'<b>Accepted.</b> Access saved <code>'+(val||'(blank)')+'</code> into '+st.field+'.'})
      :h('div',{class:'dialogbox',html:'<b>Microsoft Access</b>'+msg+'<div style="margin-top:.4rem"><span class="pill">OK</span></div>'});
    out.prepend(h('div',{class:'res'},h('span',{class:'mark '+(accepted?'ok':'no')},accepted?'Accepted ✓':'Rejected ✗'),h('div',{},h('div',{html:'Test data: <code>'+(val||'(nothing)')+'</code>'}),box)));
    say(accepted?'Accepted.':'Rejected. '+msg);
    if(!doneOK&&tested>=3&&rejected>=1&&st.opts[chosen].ok){doneOK=true;fbSet(fb,'ok','<b>Nice testing.</b> You tried '+tested+' values and at least one was rejected. That is what evidence looks like.');ctx.complete(30,'testing a rule')}
  }
  const go=h('button',{type:'button',class:'btn sm',onclick:()=>run(inp.value)},'Test this value');
  inp.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();run(inp.value)}});
  const chips=h('div',{class:'seg'},...st.tests.map(t=>h('button',{type:'button',class:'btn quiet sm',onclick:()=>run(t)},t===''?'(leave blank)':t)));
  testBox.append(h('h3',{},'Now test your rule'),h('p',{html:'Type a value into <b>'+st.field+'</b>, or press a quick button. Try <b>at least 3</b> values. Include one that should be rejected.'}),
    h('label',{for:name+'i',style:'font-weight:700'},st.field+':'),h('div',{class:'m-row'},inp,go),h('div',{},h('p',{style:'margin:.3rem 0'},'Quick test values:'),chips),out);
  const check=h('button',{type:'button',class:'btn',onclick:()=>{
    const sel=$('input:checked',opts);if(!sel){fbSet(fb,'no','Pick a rule first.');return}
    chosen=+sel.value;const o=st.opts[chosen];
    if(o.ok){fbSet(fb,'ok','<b>That rule works.</b> '+o.why);testBox.hidden=false;say('That rule works. The test area is now open.')}
    else{fbSet(fb,'no','<b>Not the best choice.</b> '+o.why+' You can still try it in the test area to see what happens, or pick another rule.');testBox.hidden=false;say('Not the best choice.')}
  }},'Use this rule');
  el.append(h('p',{class:'note',html:st.story}),h('fieldset',{},h('legend',{},'Step 1. Choose the Validation Rule for '+st.field),opts,h('div',{style:'margin-top:.6rem'},check),fb),testBox);
  return el;
};

W.rel=(st,ctx)=>{
  const el=h('div',{class:'stack'});
  if(st.intro)el.append(h('p',{class:'lead',html:st.intro}));
  let tries=0;const sum=h('div',{class:'fb',role:'status'});
  const rows=st.cands.map((c,ix)=>{
    const name='r'+ix+Math.random().toString(36).slice(2,6);
    const L=c.flip?c.many:c.one,R=c.flip?c.one:c.many;
    const fb=h('div',{class:'fb',role:'status'});
    const opts=[['none','Not related'],['L','Left is the ONE side'],['R','Right is the ONE side']];
    const seg=h('div',{class:'seg'},...opts.map(([v,l])=>h('label',{},h('input',{type:'radio',name,value:v}),l)));
    const ans=c.none?'none':(c.flip?'R':'L');
    return{c,seg,fb,ans,fs:h('fieldset',{},h('legend',{html:'<code>'+L+'</code> &nbsp;and&nbsp; <code>'+R+'</code>'}),seg,fb)};
  });
  rows.forEach(r=>el.append(r.fs));
  const btn=h('button',{type:'button',class:'btn',onclick:()=>{
    tries++;let right=0;
    rows.forEach(r=>{const s=$('input:checked',r.seg);
      if(!s){fbSet(r.fb,'no','Choose one.');return}
      if(s.value===r.ans){right++;fbSet(r.fb,'ok','<b>Correct.</b> '+r.c.why)}
      else fbSet(r.fb,'no','<b>Not quite.</b> '+(tries>=2?r.c.why:r.c.hint||'Ask: which table holds each item once, and which table repeats it?'));
    });
    if(right===rows.length){fbSet(sum,'ok','<b>All links found.</b> '+st.win);ctx.complete(tries===1?40:30,'relationships');say('All relationships correct.')}
    else{fbSet(sum,'no',right+' of '+rows.length+' correct. Fix the "Not quite" ones.');say(right+' of '+rows.length+' correct.')}
  }},'Check my relationships');
  el.append(btn,sum);return el;
};

W.form=(st,ctx)=>{
  const OPTS=['Choose...','Text box','Text box with date picker','Combo box (drop-down list)','Check box','Locked text box'];
  const el=h('div',{class:'stack'});
  if(st.intro)el.append(h('p',{class:'lead',html:st.intro}));
  const rows=st.fields.map(f=>{
    const s=h('select',{class:'sel','aria-label':'Control for '+f.n},...OPTS.map(o=>h('option',{value:o},o)));
    const fb=h('div',{class:'fb',role:'status'});
    return{f,s,fb,tr:h('tr',{},h('td',{},h('b',{},f.n),h('div',{style:'font-size:.85rem;color:var(--muted)',html:f.note||''})),h('td',{},s),h('td',{},fb))};
  });
  el.append(h('div',{class:'tblwrap'},h('table',{class:'t'},h('thead',{},h('tr',{},h('th',{},'Field'),h('th',{},'Control to use'),h('th',{},'Feedback'))),h('tbody',{},...rows.map(r=>r.tr)))));
  const preview=h('div',{class:'stack',hidden:true});
  let tries=0;const sum=h('div',{class:'fb',role:'status'});
  const btn=h('button',{type:'button',class:'btn',onclick:()=>{
    tries++;let right=0;
    rows.forEach(r=>{
      if(r.s.value==='Choose...'){fbSet(r.fb,'no','Pick a control.');return}
      if(r.s.value===r.f.ans){right++;fbSet(r.fb,'ok','<b>Correct.</b> '+r.f.why)}
      else fbSet(r.fb,'no','<b>Not quite.</b> '+(tries>=2?'Use: <b>'+r.f.ans+'</b>. '+r.f.why:r.f.hint));
    });
    if(right===rows.length){
      fbSet(sum,'ok','<b>Great design.</b> Here is how your form looks in Form View:');
      preview.hidden=false;preview.replaceChildren(h('h3',{},st.formName+' (Form View)'),
        h('div',{class:'fm'},...st.fields.map(f=>{
          let c;const id='pv'+f.n;
          if(f.ans==='Check box')c=h('input',{type:'checkbox',id,style:'width:1.4rem;height:1.4rem'});
          else if(f.ans==='Combo box (drop-down list)')c=h('select',{class:'sel',id},...Object.values(CLUBS).map(x=>h('option',{},x)));
          else if(f.ans==='Locked text box')c=h('input',{class:'inp',id,value:'(AutoNumber)',disabled:true});
          else c=h('input',{class:'inp',id,type:'text',placeholder:f.ans==='Text box with date picker'?'dd/mm/yyyy':''});
          return h('label',{for:id},f.label||f.n,c)})),
        h('p',{class:'note tip',html:'Also add buttons such as <b>Save record</b> and <b>Close form</b>, clear labels, and a title. You will do this in Access in the next steps.'}));
      ctx.complete(tries===1?40:30,'form design');say('Form design correct.');
    }else{fbSet(sum,'no',right+' of '+rows.length+' right. Fix the "Not quite" ones.');say(right+' of '+rows.length+' right.')}
  }},'Check my form');
  el.append(btn,sum,preview);return el;
};

W.query=(st,ctx)=>{
  const COLS=['RunnerID','RunnerForename','RunnerSurname','RunnerDOB','RunningClubName'];
  const el=h('div',{class:'stack'});
  if(st.intro)el.append(h('p',{class:'lead',html:st.intro}));
  el.append(h('p',{class:'goal',html:'<b>Your question:</b> '+st.task}));
  const showFs=h('fieldset',{},h('legend',{},'1. Which fields do you want to SHOW?'),h('div',{class:'seg'},...COLS.map(c=>h('label',{},h('input',{type:'checkbox',value:c}),c))));
  const critF=h('select',{class:'sel','aria-label':'Criteria field'},h('option',{value:''},'(no criteria)'),h('option',{value:'RunningClubName'},'RunningClubName'),h('option',{value:'RunnerDOB'},'RunnerDOB'));
  const critO=h('select',{class:'sel','aria-label':'Criteria operator'},...['=','<','>'].map(o=>h('option',{value:o},o==='='?'= (equals)':o==='<'?'< (before / less than)':'> (after / more than)')));
  const critV=h('input',{class:'inp',type:'text','aria-label':'Criteria value',placeholder:'e.g. Newborough or 01/01/1970'});
  const critFs=h('fieldset',{},h('legend',{},'2. Criteria (the filter)'),h('div',{class:'m-row'},critF,critO,critV));
  const sortF=h('select',{class:'sel','aria-label':'Sort field'},h('option',{value:''},'(no sort)'),...COLS.map(c=>h('option',{value:c},c)));
  const sortD=h('select',{class:'sel','aria-label':'Sort direction'},h('option',{value:'asc'},'Ascending (A to Z, oldest first)'),h('option',{value:'desc'},'Descending (Z to A, newest first)'));
  const sortFs=h('fieldset',{},h('legend',{},'3. Sort'),h('div',{class:'m-row'},sortF,sortD));
  const fb=h('div',{class:'fb',role:'status'});const out=h('div',{class:'stack'});
  let tries=0;
  const pd=v=>VPARSE.date(v);
  const btn=h('button',{type:'button',class:'btn',onclick:()=>{
    tries++;
    const cols=$$('input:checked',showFs).map(x=>x.value);
    const cf=critF.value,co=critO.value,cv=critV.value.trim(),sf=sortF.value,sd=sortD.value;
    let rows=RUNNERS.map(r=>({RunnerID:r[0],RunnerDOB:r[1],RunnerSurname:r[2],RunnerForename:r[3],RunningClubName:CLUBS[r[4]]}));
    let problem='';
    if(cf){
      if(cf==='RunnerDOB'){const d=pd(cv);if(!d){problem='For a date, type it like 01/01/1970.'}else{
        const t=d.getFullYear()*10000+(d.getMonth()+1)*100+d.getDate();
        rows=rows.filter(r=>{const n=+r.RunnerDOB.replace(/-/g,'');return co==='='?n===t:co==='<'?n<t:n>t})}}
      else rows=rows.filter(r=>co==='='?r[cf].toLowerCase()===cv.toLowerCase():true);
      if(cf==='RunningClubName'&&co!=='=')problem='For a club name, use = (equals).';
    }
    if(sf)rows.sort((a,b)=>(a[sf]>b[sf]?1:a[sf]<b[sf]?-1:0)*(sd==='desc'?-1:1));
    const okCols=cols.length===st.cols.length&&st.cols.every(c=>cols.includes(c));
    const okCrit=(!st.crit&&!cf)||(st.crit&&cf===st.crit.f&&co===st.crit.o&&(st.crit.f==='RunnerDOB'?(pd(cv)&&pd(st.crit.v)&&pd(cv).getTime()===pd(st.crit.v).getTime()):cv.toLowerCase()===st.crit.v.toLowerCase()));
    const okSort=(!st.sort&&!sf)||(st.sort&&sf===st.sort.f&&sd===st.sort.d);
    out.replaceChildren();
    if(!problem&&cols.length){
      out.append(h('p',{html:'<b>Results: '+rows.length+' records.</b> (showing the first 8)'}),
        h('div',{class:'tblwrap'},h('table',{class:'t'},h('thead',{},h('tr',{},...cols.map(c=>h('th',{},c)))),h('tbody',{},...rows.slice(0,8).map(r=>h('tr',{},...cols.map(c=>h('td',{},c==='RunnerDOB'?r[c].split('-').reverse().join('/'):String(r[c])))))))));
    }
    if(problem){fbSet(fb,'no',problem);return}
    if(!cols.length){fbSet(fb,'no','Tick at least one field to show.');return}
    if(okCols&&okCrit&&okSort){fbSet(fb,'ok','<b>Query solved.</b> '+(st.win||''));ctx.complete(tries===1?45:35,'a query');say('Query solved.')}
    else{
      const bits=[];if(!okCols)bits.push('the fields you show');if(!okCrit)bits.push('the criteria');if(!okSort)bits.push('the sort');
      fbSet(fb,'no','<b>Close.</b> Re-read the question and check '+bits.join(', ')+'.'+(tries>=3?' <b>Hint:</b> '+st.hint:''));say('Not quite. Check '+bits.join(', ')+'.');
    }
  }},'Run query');
  el.append(showFs,critFs,sortFs,btn,fb,out);return el;
};

W.write=(st,ctx)=>{
  const el=h('div',{class:'stack'});
  if(st.intro)el.append(h('p',{class:'lead',html:st.intro}));
  if(st.data)el.append(h('div',{html:st.data}));
  const ta=h('textarea',{class:'inp',id:'wr'+Math.random().toString(36).slice(2,6),'aria-label':'Your answer'});
  el.append(h('p',{},'Sentence starters. Press one to add it to your answer:'),
    h('div',{class:'seg'},...st.starters.map(s=>h('button',{type:'button',class:'btn quiet sm',onclick:()=>{ta.value+=(ta.value&&!/\s$/.test(ta.value)?' ':'')+s+' ';ta.focus()}},s))),ta);
  const list=h('ul',{class:'checks'});const fb=h('div',{class:'fb',role:'status'});
  const btn=h('button',{type:'button',class:'btn',onclick:()=>{
    const t=ta.value;list.replaceChildren(...st.checks.map(c=>{const ok=c.test(t);return h('li',{},(ok?'✓ ':'○ ')+c.label+(ok?' (found)':' (not yet)'))}));
    const n=st.checks.filter(c=>c.test(t)).length;
    if(n===st.checks.length&&t.length>60){fbSet(fb,'ok','<b>Strong answer.</b> It has every part a marker looks for.');ctx.complete(35,'a written answer');say('Strong answer.')}
    else{fbSet(fb,'no','<b>'+n+' of '+st.checks.length+' parts found.</b> Add the missing parts, then check again. Aim for at least 2 or 3 sentences.');say(n+' of '+st.checks.length+' parts found.')}
  }},'Check my answer');
  el.append(btn,list,fb,h('div',{},h('button',{type:'button',class:'btn quiet sm',onclick:()=>{ctx.complete(10,'having a go');fbSet(fb,'ok','<b>Thanks for having a go.</b> Look at the model answer on the previous step and compare.')}},'I have finished, move on')));
  return el;
};

W.compare=(st,ctx)=>{
  const el=h('div',{class:'stack'});
  if(st.intro)el.append(h('p',{class:'lead',html:st.intro}));
  el.append(h('div',{class:'cmp'},
    h('div',{class:'weak'},h('h3',{},'⚠ Needs work'),h('div',{class:'stack',html:st.weak})),
    h('div',{class:'good'},h('h3',{},'✓ What good looks like'),h('div',{class:'stack',html:st.good}))));
  if(st.points)el.append(h('div',{class:'note tip',html:'<strong>Why the good one is better</strong><ul class="checks">'+st.points.map(p=>'<li>'+p+'</li>').join('')+'</ul>'}));
  ctx.autoDone(10,'studying an example');
  return el;
};

W.check=(st,ctx)=>{
  const el=h('div',{class:'stack'});
  if(st.intro)el.append(h('p',{class:'lead',html:st.intro}));
  const key=stepKey(ctx.m,ctx.i);const saved=S.chk[key]||[];
  const fb=h('div',{class:'fb',role:'status'});
  const fs=h('fieldset',{},h('legend',{},'Tick each one when you have done it'));
  const boxes=st.items.map((t,ix)=>{const cb=h('input',{type:'checkbox',checked:saved.includes(ix)});cb.checked=saved.includes(ix);
    cb.addEventListener('change',()=>{const now=boxes.map((b,k)=>b.checked?k:-1).filter(k=>k>=0);S.chk[key]=now;saveS();
      if(now.length===st.items.length){fbSet(fb,'ok','<b>Brilliant. Every box is ticked.</b>');ctx.complete(15,'finishing the checklist')}else fbSet(fb,'',now.length+' of '+st.items.length+' ticked.')});
    fs.append(h('label',{class:'opt'},cb,h('span',{html:t})));return cb});
  el.append(fs,fb);
  if(saved.length===st.items.length)ctx.autoDone(0);
  return el;
};

/* ----- router + views ----- */
const main=()=>$('#main');
let cur={m:null,i:0};
function go(hash){if(location.hash==='#'+hash)route();else location.hash=hash}
function route(){
  const hsh=location.hash.replace('#','');
  closeFs();
  if(hsh==='partb'){showPartBChoice();return}
  const pm=/^part(a|b25|b)-(practice|challenge)$/.exec(hsh);
  if(pm){showSetup(pm[1].toUpperCase(),pm[2]);return}
  if(hsh.startsWith('m-')){const m=missionById(hsh.slice(2));if(m){const saved=S.at&&S.at[m.id];showMission(m,saved||0);return}}
  showHome();
}
window.addEventListener('hashchange',route);

function statusOf(m){
  if(S.done[m.id])return'done';
  const any=m.steps.some((s,i)=>S.done[stepKey(m,i)]);return any?'prog':'new';
}
function showHome(){
  cur={m:null,i:0};
  document.title='Access Quest';
  const el=main();el.replaceChildren();
  const wrap=h('div',{class:'wrap'});
  const partCard=(P)=>{
    const info=PART_INFO[P];const k=P.toLowerCase();
    const bp=store.get('aq-best-'+P+'-practice',null),bc=store.get('aq-best-'+P+'-challenge',null);
    return h('div',{class:'card part-card'},h('h2',{},info.title),h('p',{},info.blurb),
      h('ul',{class:'checks'},...info.tasks.map(t=>h('li',{},t))),
      h('div',{class:'m-row'},h('a',{class:'btn',href:'#part'+k+'-practice'},'Practice'),h('a',{class:'btn alt',href:'#part'+k+'-challenge'},'Challenge')),
      h('p',{class:'a-hint',style:'margin:.6rem 0 0'},'Practice: hints and instant feedback. Challenge: timed, marked like the exam.'),
      (bp!==null||bc!==null)?h('p',{class:'gamey'},bp!==null?h('span',{class:'chip good'},'Practice best '+bp+'%'):null,' ',bc!==null?h('span',{class:'chip info'},'Challenge best '+bc+'%'):null):null);
  };
  wrap.append(
    h('section',{class:'home-hero','aria-labelledby':'hh'},
      h('h1',{id:'hh'},'Practise Microsoft Access for your BTEC Unit 2 exam'),
      h('p',{class:'lead'},'A practice copy of Access that works like the real thing. Do the Edexcel Part A and Part B tasks here first, then repeat the same steps in real Access in your exam.'),
      h('div',{class:'home-btns'},h('a',{class:'btn big',href:'#parta-practice'},'Part A practice'),h('a',{class:'btn big',href:'#partb'},'Part B practice')),
      h('p',{class:'a-hint home-sub'},'Want a timed attempt? ',h('a',{href:'#parta-challenge'},'Part A challenge'),' · ',h('a',{href:'#partb25-challenge'},'Part B 2025 challenge'),' · ',h('a',{href:'#partb-challenge'},'Part B 2201 challenge'),' · ',h('a',{href:'normalise/'},'Normalisation guide'))),
    h('div',{class:'home-info'},
      h('section',{class:'card','aria-labelledby':'hi1'},h('h2',{id:'hi1'},'Access'),
        h('p',{},'This is a safe practice copy of Microsoft Access 2016. The Ribbon, tabs, menus, dialog boxes and Property Sheets look and behave like the real program.'),
        h('p',{},'Buttons you need for the exam work. Buttons you do not need tell you so. If there are two ways to do a task, both ways work.')),
      h('section',{class:'card','aria-labelledby':'hi2'},h('h2',{id:'hi2'},'About Access'),
        h('p',{},'Microsoft Access is a program for building databases. Everything lives in one file that ends in .accdb. You build objects:'),
        h('ul',{class:'checks'},h('li',{html:'<b>Tables</b> store the data'}),h('li',{html:'<b>Queries</b> ask questions and calculate'}),h('li',{html:'<b>Forms</b> make typing data in easy and safe'}),h('li',{html:'<b>Reports</b> show results ready to print or save as a PDF'}),h('li',{html:'<b>Macros</b> do a list of actions for you'}))),
      h('section',{class:'card','aria-labelledby':'hi3'},h('h2',{id:'hi3'},'About databases'),
        h('p',{},'A database stores information in an organised way so it can be searched, sorted and checked.'),
        h('ul',{class:'checks'},h('li',{html:'A <b>table</b> has rows (<b>records</b>) and columns (<b>fields</b>)'}),h('li',{html:'A <b>primary key</b> makes every record different'}),h('li',{html:'<b>Relationships</b> link tables so each fact is stored once'}),h('li',{html:'<b>Validation</b> stops wrong data going in'})),
        h('p',{},h('a',{href:'normalise/'},'Read the normalisation guide'),' to see how one big flat table becomes linked tables.'))));
  const start=missionById('start');
  wrap.append(h('section',{class:'track','aria-labelledby':'t0'},
    h('header',{},h('h2',{id:'t0'},'Skills guide: start here'),h('p',{class:'sub'},'Do this one first. It takes about 15 minutes.')),
    h('ul',{class:'mgrid'},mcard(start))));
  [['A','Skills guide for Part A','Short missions on planning and design.'],['B','Skills guide for Part B','Short missions on building, testing and evaluating.']].forEach(([p,t,sub])=>{
    wrap.append(h('section',{class:'track','aria-labelledby':'t'+p},
      h('header',{},h('h2',{id:'t'+p},t),h('p',{class:'sub'},sub)),
      h('ul',{class:'mgrid'},...MISSIONS.filter(m=>m.paper===p).map(mcard))));
  });
  wrap.append(h('section',{class:'track gamey','aria-labelledby':'tb'},h('h2',{id:'tb'},'My badges'),
    h('ul',{class:'badges'},...MISSIONS.filter(m=>m.badge).map(m=>h('li',{class:'badge'+(S.badges[m.id]?' got':'')},h('b',{},(S.badges[m.id]?'✓ ':'🔒 ')+m.badge[0]),h('span',{},S.badges[m.id]?m.badge[1]:'Finish “'+m.title+'” to earn this.'))))));
  wrap.append(h('footer',{class:'foot'},
    h('p',{html:'<b>Good to know.</b> This guide uses the running club database from your Part B files (tables such as <code>tblRunner</code>, <code>tblRun</code> and <code>tblRunResults</code>). The activity numbers and evidence rules come from your testing and interface templates. Your Access screen may look a little different, for example in Access 2016 or Microsoft 365, but the button names are the same.'}),
    h('div',{},h('button',{type:'button',class:'btn quiet sm',onclick:()=>{if(resetArm){S={xp:0,got:{},done:{},badges:{},chk:{}};saveS();resetArm=false;drawXP();showHome();say('Progress reset.')}else{resetArm=true;say('Press the button again to confirm.');$('#resetbtn').textContent='Press again to confirm reset'}},id:'resetbtn'},'Reset my progress'))));
  el.append(wrap);
  drawXP();
}
let resetArm=false;
function mcard(m){
  const st=statusOf(m);
  const label=st==='done'?'Done ✓':st==='prog'?'In progress':'Not started';
  return h('li',{},h('a',{class:'mcard'+(st==='done'?' done':'')+(m.boss?' boss':''),href:'#m-'+m.id},
    h('span',{class:'num'},m.num),h('h3',{},m.title),h('p',{},m.blurb),
    h('span',{class:'foot'},h('span',{class:'chip '+(st==='done'?'good':'')},label),h('span',{class:'chip'},m.mins+' min'),m.activity?h('span',{class:'chip info'},m.activity):null)));
}

function showMission(m,startAt){
  cur={m,i:Math.min(startAt,m.steps.length-1)};
  document.title=m.title+' | Access Quest';
  const el=main();el.replaceChildren();
  const wrap=h('div',{class:'wrap'});
  const head=h('div',{class:'mhead'},
    h('div',{class:'crumbs'},h('a',{class:'btn alt sm',href:'#home'},'← All missions'),h('span',{class:'chip'},m.paperName)),
    h('h1',{},m.title),
    h('div',{class:'meta'},h('span',{class:'chip'},m.mins+' min'),m.activity?h('span',{class:'chip info'},m.activity):null),
    h('p',{class:'goal',html:'<b>By the end you will:</b> '+m.goal}));
  const nav=h('nav',{'aria-label':'Steps in this mission'});
  const stepList=h('ol',{class:'stepnav'});
  nav.append(stepList);
  const card=h('section',{class:'card','aria-labelledby':'steph'});
  wrap.append(head,nav,card);el.append(wrap);
  function paintNav(){
    stepList.replaceChildren(...m.steps.map((s,i)=>h('li',{},h('button',{type:'button',class:S.done[stepKey(m,i)]?'ok':'','aria-current':i===cur.i?'step':false,'aria-label':'Step '+(i+1)+': '+s.title+(S.done[stepKey(m,i)]?' (done)':''),onclick:()=>{cur.i=i;paintStep()}},S.done[stepKey(m,i)]?'✓':String(i+1)))));
  }
  function paintStep(){
    stopSpeech();
    const i=cur.i,st=m.steps[i];
    S.at=S.at||{};S.at[m.id]=i;saveS();
    const ctx={m,i,
      isDone:()=>!!S.done[stepKey(m,i)],
      complete(pts,why){
        const k=stepKey(m,i);
        if(pts)award(k,pts,why);
        if(!S.done[k]){S.done[k]=true;saveS()}
        paintNav();updateFoot();
      },
      autoDone(pts,why){const k=stepKey(m,i);if(!S.done[k]){S.done[k]=true;if(pts)award(k,pts,why);saveS()}paintNav();setTimeout(updateFoot,0)}
    };
    const body=(W[st.type]||W.learn)(st,ctx);
    const readBtn=('speechSynthesis' in window)?h('button',{type:'button',class:'btn quiet sm',id:'readbtn',onclick:()=>toggleSpeech(card)},'🔊 Read this step aloud'):null;
    card.replaceChildren(
      h('div',{class:'stephead'},h('div',{},h('p',{style:'margin:0;font-size:.9rem;color:var(--muted)'},'Step '+(i+1)+' of '+m.steps.length),h('h2',{id:'steph',tabindex:'-1'},st.title)),readBtn),
      h('div',{id:'stepbody'},body),
      h('div',{class:'stepfoot'},
        h('button',{type:'button',class:'btn alt',id:'bk',disabled:i===0,onclick:()=>{cur.i--;paintStep();focusHead()}},'← Back'),
        h('button',{type:'button',class:'btn',id:'nx',onclick:()=>{if(i<m.steps.length-1){cur.i++;paintStep();focusHead()}else finish()}},'Next →')));
    paintNav();updateFoot();
  }
  function updateFoot(){
    const nx=$('#nx');if(!nx)return;const i=cur.i,last=i===m.steps.length-1,done=!!S.done[stepKey(m,i)];
    nx.textContent=last?'Finish mission ✓':(done?'Next →':'Skip for now →');
    nx.className='btn'+(done||last?'':' alt');
  }
  function focusHead(){const hd=$('#steph');if(hd){hd.focus();say('Step '+(cur.i+1)+' of '+m.steps.length+': '+m.steps[cur.i].title);window.scrollTo({top:0})}}
  function finish(){
    const all=m.steps.every((s,i)=>S.done[stepKey(m,i)]);
    const first=!S.done[m.id];
    S.done[m.id]=true;if(first){S.xp+=all?50:25}
    if(m.badge&&!S.badges[m.id]&&all)S.badges[m.id]=true;
    saveS();drawXP();
    const idx=MISSIONS.indexOf(m),nxt=MISSIONS[idx+1];
    card.replaceChildren(h('div',{class:'win'},
      h('h2',{id:'steph',tabindex:'-1'},'Mission complete'),
      h('p',{class:'lead'},first?('You earned '+(all?50:25)+' bonus XP.'):'You have already finished this mission. Nice revision.'),
      m.badge&&S.badges[m.id]?h('p',{class:'gamey',html:'<b>Badge: '+m.badge[0]+'</b><br>'+m.badge[1]}):null,
      !all?h('p',{class:'note warn',html:'Some steps were skipped. Go back to them any time to earn the rest of the XP and the badge.'}):null,
      h('div',{class:'stepfoot',style:'justify-content:center'},
        h('a',{class:'btn alt',href:'#home'},'Back to the map'),
        nxt?h('a',{class:'btn',href:'#m-'+nxt.id},'Next: '+nxt.title+' →'):null)));
    paintNav();$('#steph').focus();say('Mission complete.');window.scrollTo({top:0});
  }
  paintStep();
  window.scrollTo({top:0});
}

/* ----- read aloud ----- */
let speaking=false;
function stopSpeech(){try{if('speechSynthesis' in window)speechSynthesis.cancel()}catch(e){}speaking=false;const b=$('#readbtn');if(b)b.textContent='🔊 Read this step aloud'}
function toggleSpeech(card){
  try{
    if(speaking){stopSpeech();return}
    const t=$('#stepbody',card).innerText;
    const u=new SpeechSynthesisUtterance($('#steph').innerText+'. '+t);
    u.rate=.95;u.onend=()=>stopSpeech();u.onerror=()=>stopSpeech();
    speechSynthesis.speak(u);speaking=true;$('#readbtn').textContent='⏹ Stop reading';
  }catch(e){say('Read aloud is not available in this browser.')}
}

/* ----- dialogs ----- */
function openDlg(d){try{d.showModal()}catch(e){d.setAttribute('open','')}}
function openSettings(){drawSettings();openDlg($('#dlgSet'))}
function openWords(){openDlg($('#dlgWords'))}
function seg(name,label,opts,key){
  return h('div',{class:'setrow',role:'radiogroup','aria-label':label},h('b',{},label),
    h('div',{class:'seg'},...opts.map(([v,l])=>{
      const inp=h('input',{type:'radio',name,value:v,checked:P[key]===v});inp.checked=P[key]===v;
      inp.addEventListener('change',()=>{P[key]=v;saveP();applyPrefs();say(label+' changed to '+l)});
      return h('label',{},inp,l)})));
}
function drawSettings(){
  const box=$('#setbody');box.replaceChildren(
    seg('sz','Text size',[['1','Normal'],['2','Large'],['3','Extra large'],['4','Huge']],'size'),
    seg('ft','Font',[['atkinson','Clear (Atkinson)'],['lexend','Easy reading (Lexend)'],['comic','Friendly (Comic Neue)'],['system','Your device font']],'font'),
    seg('sp','Spacing',[['normal','Normal'],['wide','Wide: more space between lines, letters and words']],'space'),
    seg('pl','Colours',[['auto','Match my device'],['light','Light'],['dark','Dark'],['contrast','High contrast (yellow on black)'],['cream','Cream'],['blue','Soft blue'],['mint','Soft green'],['pink','Soft pink']],'pal'),
    seg('mo','Movement',[['auto','Match my device'],['off','Turn off all animation']],'motion'),
    seg('xp','Scores and badges',[['show','Show XP and badges'],['hide','Hide them (calmer screen)']],'xp'),
    h('div',{class:'note',html:'<b>Screen readers:</b> every button has a clear name, answers are announced as you go, and nothing needs a mouse or dragging. Use the heading list or the “Skip to main content” link to move around.'}),
    h('div',{class:'stepfoot'},
      h('button',{type:'button',class:'btn quiet',onclick:()=>{P={size:'1',font:'atkinson',space:'normal',pal:'auto',motion:'auto',xp:'show'};saveP();applyPrefs();drawSettings()}},'Reset display settings'),
      h('button',{type:'button',class:'btn',onclick:()=>$('#dlgSet').close()},'Done')));
}

/* ----- boot ----- */
function boot(){
  applyPrefs();
  $('#dlgWords .glbody').innerHTML='<dl class="gl">'+GLOSSARY.map(g=>'<dt>'+g[0]+'</dt><dd>'+g[1]+'</dd>').join('')+'</dl>';
  $('#btnSet').addEventListener('click',openSettings);
  $('#btnWords').addEventListener('click',openWords);
  $$('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d)d.close()}));
  ensureLabGlobals();
  $('#btnHome').addEventListener('click',()=>go('home'));
  $$('.closeDlg').forEach(b=>b.addEventListener('click',()=>b.closest('dialog').close()));
  route();drawXP();
}
