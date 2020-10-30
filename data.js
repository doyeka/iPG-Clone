// Questions
var q = [
	// Originals
	'What do you understand that others don&#39;t?',
	'Why will you succeed?',
	'How big an opportunity is there?',
	'What problems/hurdles are you anticipating?',
	'Who would use your product?',
	'How much does customer acquisition cost?',
	'How will you make money?',
	'How much money could you make per year?',
	'How many users do you have?',
	'What is your user growth rate?',
	'How many users are paying?',
	'How are you meeting customers?',
	'How are you understanding customer needs?',
	'How will you get users?',
	'Who would you hire or how would you add to your team?',
	'So what are you working on?',
	'Do you have a demo?',
	'Where is the rocket science here?',
	'How does your product work in more detail?',
	'How is your product different?',
	'What are you going to do next?',
	'What&#39;s new about what you make?',
	'What, exactly, makes you different from existing options?',
	'Who needs what you&#39;re making?',
	'How do you know customers need what you&#39;re making?',
	'Why isn&#39;t someone already doing this?',
	'What obstacles will you face and how will you overcome them?',
	'How will customers and/or users find out about you?',
	'What resistance will they have to trying you and how will you overcome it?',
	'What are the key things about your field that outsiders don&#39;t understand?',
	'What part of your project are you going to build first?',
	'Who is going to be your first paying customer?',
	'If your startup succeeds, what additional areas might you be able to expand into?',
	'Why did you choose this idea?',
	'What have you learned so far from working on your product?',
	'Six months from now, what&#39;s going to be your biggest problem?',
	'Where do new users come from?',
	'What is your growth like?',
	'What&#39;s the conversion rate?',
	'What makes new users try you?',
	'Why do the reluctant users hold back?',
	'What are the top things users want?',
	'What has surprised you about user behaviour?',
	'What&#39;s an impressive thing you have done?',
	'What do you understand about your users?',
	'Why did you pick this idea to work on?',
	'What domain expertise do you have?',
	'Who are your competitors?',
	'Who might become competitors?',
	'Someone just showed us an idea like this right before you guys. I don&#39;t like it. What else do you have?',
	'What competition do you fear most?',
	'What is your distribution strategy?',
	'How did your team meet?',
	'Why did your team get together?',
	'Who in your team does what?',
	'Who is &quot;the boss&quot;?',
	'What will you do if we don&#39;t fund you?',
	'Would you relocate to Silicon Valley?',
	'How do we know your team will stick together?',
	'What else have you created together?',
	'Are you open to changing your idea? ',
	'What systems have you hacked?',
	'Tell us about a tough problem you solved?',
	'In what ways are you resourceful?',
	'Will you reincorporate as a US company?',
	'Will your team stick at this?',
	'Tell us something surprising you have done?',
	'What&#39;s the funniest thing that has happened to you?',
	'What&#39;s the worst thing that has happened?',
	'What&#39;s the biggest mistake you have made?',
	'What is your burn rate?',
	'How long can you go before funding?',
	'What is the next step with the product evolution?',
	'Have you raised funding?',
	'Who would be your next hire?',
	'How do you know people want this?',
	'What do you know about this space/product others don&#39;t know?',
  'Who would use your product?',
	'How do you know customers need what you’re making? How do you know people want this?',
	"How do you know how many people need what you're making?",
	'How will you make money?',
	'How much money could you make per year?',
	'Why isn’t someone already doing this?',
	'Why will you succeed over others? What do you understand that others don’t?',
	'What have you learned so far from working on your product?',
	'How much does customer acquisition cost?',
  'How many users do you have?',
	'Where do new users come from? How do users find out about you?',
	'How are you meeting customers?',
	'What is your distribution strategy? How will you grow?',
  'What makes new users try you?',
  'Why do the reluctant users hold back?',
	'What is your growth like?',
	'What is your user growth rate?',
	"What’s the conversion rate?",
	'How many users are paying?',
	'Who is going to be your first paying customer?',
	'What resistance will users have to trying you and how will you overcome it?',
	'How are you understanding customer needs?',
	'What are the top things your users want?',
	'What has surprised you about user behavior?',
	'What’s new about what you make?',
	'What problems and hurdles are you anticipating? How will you overcome them?',
	'Six months from now, what’s going to be your biggest problem?',
	'Why did you choose this idea? Why did you pick this idea to work on?',
	'Where is the rocket science here?',
	'How does your product work in more detail?',
	'What do you understand about your users? What domain expertise do you have?',
	'What are the key things about your field that outsiders don’t understand?',
	'What’s an impressive thing you have done?',
	'How did your team meet?',
	'Why did your team get together?',
	'Who in your team does what?',
	'Who would you hire or how would you add to your team? Who would be your next hire?',
	'What part of your project are you going to build first? What are you going to do next? What is the next step with the product evolution?',
	'If your startup succeeds, what additional areas might you be able to expand into?',
	'Who are your competitors?',
	'Who might become competitors?',
	'What competition do you fear most?',
	'What is your burn rate?',
	'How long can you go before funding?',
	'Have you raised funding?',
	'What will you do if we don’t fund you?',
	'Would you relocate to Silicon Valley during YC?',
	'Who is “the boss”?',
	'How do we know your team will stick together? Will your team stick at this?',
	'What else have you created together?',
	'Are you open to changing your idea?',
	'Someone just showed us an idea like this right before you guys. I don’t like it. What else do you have?',
	'What systems have you hacked?',
	'Tell us about a tough problem you solved?',
	'In what ways are you resourceful?',
	'What is something surprising you have done?',
	'What’s the funniest thing that has happened to you?',
	'What’s the worst thing that has happened? What’s the biggest mistake you have made?',
	"Why haven't you quit your job?",
	'What are your plans for the next year?',
	'How many users in beta?',
	'What was user feedback?',
	'What progress have you made since the application?',
	'How many users have you interviewed?',
	'How did you find people to interview?',
	'Who is currently on your team?',
	'What happened to Jeff?',
	'How long have you been working on this?',
	'How long have you been working on this full time?',
	'Are people willing to pay?',
	'Who needs what youre making?'
];

// Tips
var tips = [
	'Try to have quick and concise answers.',
	'Try to answer in 2 to 3 sentences.',
	'Answer like you would in a conversation, this is not a presentation.',
	'When talking to PG and the other YC partners, be substantive, and get straight to the point.',
	'DO NOT BEAT AROUND THE BUSH. Do not hem and haw. "Uhm"s and "uh"s don&#39;t lend an aura of intelligence.',
	'Use precise and concise language. You aren&#39;t pitching a VC that will ask you what your "secret sauce" is.',
	'He talks quickly, and so do the other YC partners. Try to match their tempo (as you should when talking to anyone).'
];
