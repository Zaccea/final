const navLinks = document.querySelectorAll('.navbar a');
const contentPanel = document.getElementById('content-panel');
const container = document.querySelector('.container');

const content = {
    home: `
        <h1>Welcome to Zaccea's 3D Model Portfolio & Commission Hub</h1>
        <p>I’m Zaccea, a dedicated solo 3D artist who’s passionate about turning your ideas into stunning, one-of-a-kind models. Whether you’re here to commission a custom 3D character or seeking support for a larger project, you’re in the right place.</p>
        <hr>
        <h2>What I Offer</h2>
        <ul>
          <li>
            <strong>Custom 3D Character Models</strong>: Just provide a reference sheet and I’ll bring your unique character ideas to life!
          </li>
          <li>
            <strong>Unique VRChat Worlds</strong>: I'll create immersive, interactive VRChat worlds customized to your vision, complete with unique environments and interactive elements.
          </li>
          <li>
            <strong>VRChat Model Setup & Optimization</strong>: I'll get your models VRChat-ready with Performance Rank optimization and animations setup for seamless use.
          </li>
          <li>
            <strong>Custom Outfit Design</strong>: Whether you're looking for a seasonal outfit or just want a fresh look I'll tailor a stylish outfit to suit your tastes!
          </li>
          <li>
            <strong>ARKit Tracking Integration</strong>: I'll enhance your models with ARKit tracking for smooth facial animations and more immersive experiences.
          </li>
          <li>
            <strong>Small Prop Creation</strong>: Need smaller items for the Twitch Integrated Throwing System (TITS) or other uses? I’ll create custom props to suit your needs.
          </li>
        </ul>
        <hr>
        <h2>Why Work With Me?</h2>
        <ul>
          <li>
            <strong>Personalized Service</strong>: I’m with you every step of the way. Your vision drives the process, and I’ll make sure every detail aligns with your goals.
          </li>
          <li>
            <strong>Artistic Excellence</strong>: With formal training in Blender, Maya, Zbrush, Substance Painter, and Photoshop, I’m ready to channel my skills into creating models that truly stand out.
          </li>
          <li>
            <strong>Clear, Friendly Communication</strong>: I believe in open, honest dialogue, keeping you updated throughout the process so you’re never left guessing.
          </li>
        </ul>
        <hr>
        <h2>Ready to Bring Your Vision to Life?</h2>
        <p>Click the <strong>"Contact"</strong> button to get in touch and share your ideas. Whether you’re a game developer, animator, content creator, or someone with a big dream, I’m ready to help bring your vision to life. </p>
    `,
    about: `
<div class="content-container">
  <h1>About Me</h1>
  
  <p>Hi, I’m Zaccea! Ever since I discovered the world of 3D modeling, I’ve been captivated by the ability to turn ideas into tangible, digital creations. As a solo 3D artist, I’m dedicated to crafting unique models that stand out — whether it’s a fully realized character, a custom outfit, or a small prop that adds just the right touch to a scene.</p>
  
  <p>My artistic journey started with an interest in VTubing and a desire to bring my own characters to life. That combined with a love for video games and animated films has inspired me to learn industry-standard tools like Blender, Maya, Substance Painter, and ZBrush. Over the years, I’ve honed my skills through formal training and hands-on projects, pushing myself to master every aspect of the 3D character creation process.</p>
  
  <p>What sets me apart is my commitment to personalized service. Every project I take on is a chance to connect with someone’s vision and bring it to life with care, precision, and creativity. I know what it's like to have a vision only for it to not turn out how you hoped, and I’m here to work with you every step of the way. No idea is too ambitious or too small — I’m always ready for a challenge!</p>
  
  <h2>My Approach</h2>
  <p>Collaboration and communication are at the heart of my process. I believe that the best results come from working closely with my clients, ensuring their input is valued and their ideas are fully realized. I strive to create an open, friendly environment where you feel comfortable sharing feedback, asking questions, and shaping the outcome of your project. If you're not happy, I'm not happy!</p>
  
  <h2>Tools of the Trade</h2>
  <p>I use a range of professional tools to ensure high-quality, versatile 3D models. These include:</p>
  <ul>
    <li><strong>Blender</strong>: 3D modeling, rigging, and animation</li>
    <li><strong>Maya</strong>: Complex character animation and rigging</li>
    <li><strong>ZBrush</strong>: High-detail sculpting and character design</li>
    <li><strong>Substance Painter</strong>: Texturing and material creation for realistic finishes</li>
    <li><strong>Photoshop</strong>: Texture editing and visual enhancements</li>
  </ul>
  
  <h2>Beyond the Art</h2>
  <p>When I’m not working on client commissions or personal projects, I’m reading books, watching Period Pieces, or playing cozy games that make me fall asleep. </p>
</div>
    `,
    portfolio: `
        <h1>My Portfolio</h1>
        <p><strong>Space Chase</strong></p>
		<div class="image-gallery">
			<a href="images/0125.png" data-lightbox="Space Chase" data-title="Space Chase">
				<img src="images/0125.png" alt="Space Chase">
			</a>
			<a href="images/0317.png" data-lightbox="Space Chase" data-title="Space Chase">
				<img src="images/0317.png" alt="Space Chase">
			</a>
			<a href="images/0383.png" data-lightbox="Space Chase" data-title="Space Chase">
				<img src="images/0383.png" alt="Space Chase">
			</a>
			<a href="images/Turntable0077.png" data-lightbox="Space Chase" data-title="Space Chase">
				<img src="images/Turntable0077.png" alt="Space Chase">
			</a>
		</div>
		<p><strong>Pig Cube</strong></p>
		<div class="image-gallery">
			<a href="images/Anim_1.0001.png" data-lightbox="Pig Cube" data-title="Pig Cube">
				<img src="images/Anim_1.0001.png" alt="Pig Cube">
			</a>
			<a href="images/Anim_1.0083.png" data-lightbox="Pig Cube" data-title="Pig Cube">
				<img src="images/Anim_1.0083.png" alt="Pig Cube">
			</a>
			<a href="images/Full_1.0089.png" data-lightbox="Pig Cube" data-title="Pig Cube">
				<img src="images/Full_1.0089.png" alt="Pig Cube">
			</a>
			<a href="images/turnTable_1.0061.png" data-lightbox="Pig Cube" data-title="Pig Cube">
				<img src="images/turnTable_1.0061.png" alt="Pig Cube">
			</a>
		</div>
		<p><strong>Posh Room</strong></p>
		<div class="image-gallery">
			<a href="images/CamChair_1.0060.png" data-lightbox="Posh Room" data-title="Posh Room">
				<img src="images/CamChair_1.0060.png" alt="Posh Room">
			</a>
			<a href="images/CamLighting_1.0001.png" data-lightbox="Posh Room" data-title="Posh Room">
				<img src="images/CamLighting_1.0001.png" alt="Posh Room">
			</a>
			<a href="images/CamRug_1.0001.png" data-lightbox="Posh Room" data-title="Posh Room">
				<img src="images/CamRug_1.0001.png" alt="Posh Room">
			</a>
			<a href="images/CamTable_1.0001.png" data-lightbox="Posh Room" data-title="Posh Room">
				<img src="images/CamTable_1.0001.png" alt="Posh Room">
			</a>
			<a href="images/CamVase_1.0001.png" data-lightbox="Posh Room" data-title="Posh Room">
				<img src="images/CamVase_1.0001.png" alt="Posh Room">
			</a>
		</div>
		<p><strong>Chess Set</strong></p>
		<div class="image-gallery">
			<a href="images/F282_420_1.0282.png" data-lightbox="Chess Set" data-title="Chess Set">
				<img src="images/F282_420_1.0282.png" alt="Chess Set">
			</a>
			<a href="images/F421_859_1.0421.png" data-lightbox="Chess Set" data-title="Chess Set">
				<img src="images/F421_859_1.0421.png" alt="Chess Set">
			</a>
			<a href="images/F860_977_1.0860.png" data-lightbox="Chess Set" data-title="Chess Set">
				<img src="images/F860_977_1.0860.png" alt="Chess Set">
			</a>
			<a href="images/F978_1131_1.0978.png" data-lightbox="Chess Set" data-title="Chess Set">
				<img src="images/F978_1131_1.0978.png" alt="Chess Set">
			</a>
			<a href="images/F1132_1540_1.1132.png" data-lightbox="Chess Set" data-title="Chess Set">
				<img src="images/F1132_1540_1.1132.png" alt="Chess Set">
			</a>
			<a href="images/F1541_1862_1.1541.png" data-lightbox="Chess Set" data-title="Chess Set">
				<img src="images/F1541_1862_1.1541.png" alt="Chess Set">
			</a>
			<a href="images/F1863_2001_1.1863.png" data-lightbox="Chess Set" data-title="Chess Set">
				<img src="images/F1863_2001_1.1863.png" alt="Chess Set">
			</a>
			<a href="images/F2002_2204_1.2002.png" data-lightbox="Chess Set" data-title="Chess Set">
				<img src="images/F2002_2204_1.2002.png" alt="Chess Set">
			</a>
			<a href="images/F2205_2300_1.2205.png" data-lightbox="Chess Set" data-title="Chess Set">
				<img src="images/F2205_2300_1.2205.png" alt="Chess Set">
			</a>
		</div>
		<p><strong>Explosion</strong></p>
		<div class="image-gallery">
			<a href="images/Primitive Explosion_1.0001.png" data-lightbox="Explosion" data-title="Explosion">
				<img src="images/Primitive Explosion_1.0001.png" alt="Explosion Castle">
			</a>
			<a href="images/Primitive Explosion_1.0072.png" data-lightbox="Explosion" data-title="Explosion">
				<img src="images/Primitive Explosion_1.0072.png" alt="Explosion Castle">
			</a>
			<a href="images/Primitive Explosion_1.0152.png" data-lightbox="Explosion" data-title="Explosion">
				<img src="images/Primitive Explosion_1.0152.png" alt="Explosion Castle">
			</a>
			<a href="images/Primitive Explosion_1.0180.png" data-lightbox="Explosion" data-title="Explosion">
				<img src="images/Primitive Explosion_1.0180.png" alt="Explosion Castle">
			</a>
			<a href="images/Primitive Explosion_1.0275.png" data-lightbox="Explosion" data-title="Explosion">
				<img src="images/Primitive Explosion_1.0275.png" alt="Explosion Castle">
			</a>
			<a href="images/Primitive Explosion_1.0320.png" data-lightbox="Explosion" data-title="Explosion">
				<img src="images/Primitive Explosion_1.0320.png" alt="Explosion Castle">
			</a>
			<a href="images/Primitive Explosion_1.0336.png" data-lightbox="Explosion" data-title="Explosion">
				<img src="images/Primitive Explosion_1.0336.png" alt="Explosion Castle">
			</a>
		</div>
		<p><strong>Sci-Fi Room</strong></p>
		<div class="image-gallery">
			<a href="images/SciFiRoom_1.0001.png" data-lightbox="Sci-Fi Room" data-title="Sci-Fi Room">
				<img src="images/SciFiRoom_1.0001.png" alt="Sci-Fi Room">
			</a>
			<a href="images/SciFiRoom_1.0180.png" data-lightbox="Sci-Fi Room" data-title="Sci-Fi Room">
				<img src="images/SciFiRoom_1.0180.png" alt="Sci-Fi Room">
			</a>
			<a href="images/SciFiRoom_1.0360.png" data-lightbox="Sci-Fi Room" data-title="Sci-Fi Room">
				<img src="images/SciFiRoom_1.0360.png" alt="Sci-Fi Room">
			</a>
		</div>
    `,
	commission: `
<h2>Overview</h2>
Welcome to my Commission Page! Here, you’ll find everything you need to know about commissioning a custom 3D model. I strive to make the process simple, transparent, and enjoyable from start to finish. Whether you’re looking for a 3D character, a VRChat-ready model, a VRChat world, or a small prop, I’m here to bring your vision to life at an affordable price.</p>
<hr>
<p><strong>Services Offered</strong></p>
<ul>
<li><p><strong>Custom 3D Character Models</strong></p>
<ul>
<li>Custom 3D character modeling from provided reference sheets.</li>
<li>Includes rigging, blendshapes for facial expressions, and file formats for VRM, FBX, and Unity Package.</li>
<li>Starting at <strong>$800</strong>. Complex designs may incur additional costs.</li>
</ul>
</li>
<li><p><strong>VRChat Avatar Setup &amp; Optimization</strong></p>
<ul>
<li>Turn your model into a fully functional VRChat avatar with proper setup and optimization.</li>
<li>Includes Unity setup, animations, menus, emotes, Phys Bones, and interactive toggles.</li>
<li>Starting at <strong>$250</strong> for an existing model. The price will be lower if it is a model I made myself.</li>
</ul>
</li>
<li><p><strong>Custom Outfit Design</strong></p>
<ul>
<li>Outfit creation for existing models or new models.</li>
<li>Fully rigged and compatible with VRChat, Vtubing, or custom animation needs.</li>
<li>Starting at <strong>$200</strong>.</li>
</ul>
</li>
<li><p><strong>ARKit Tracking Integration</strong></p>
<ul>
<li>Add ARKit tracking to enable facial tracking for apps like VSeeFace and iPhone ARKit.</li>
<li>Includes 52 blendshapes required for ARKit.</li>
<li>Starting at <strong>$300</strong>.</li>
</ul>
</li>
<li><p><strong>VRChat World Creation</strong></p>
<ul>
<li>Custom-built VRChat worlds with unique environments and interactive elements.</li>
<li>Includes Unity Package setup, world lighting, collision setup, and optimization for VRChat performance.</li>
<li>Starting at <strong>$1,000</strong>. Additional costs may apply for complex designs, interactive features, or larger-scale worlds.</li>
</ul>
</li>
<li><p><strong>Small Props &amp; Accessories</strong></p>
<ul>
<li>Custom props or accessories for characters, Twitch Throwables, or world environments.</li>
<li>Pricing varies depending on size and complexity, starting at <strong>$50</strong>.</li>
</ul>
</li>
</ul>
<hr>
<p><strong>Commission Process</strong></p>
<ol>
<li><p><strong>Inquiry</strong>: Submit a commission request through my <strong>Contact</strong> Page. You’ll provide details such as project scope, design references, and intended use.</p>
</li>
<li><p><strong>Quotation</strong>: I’ll review your request and provide a price quote, timeline, and any relevant details.</p>
</li>
<li><p><strong>Deposit</strong>: A 50% deposit is required to reserve your spot in my commission queue. This ensures I can dedicate time to your project.</p>
</li>
<li><p><strong>Production</strong>: I’ll begin working on your model, providing work-in-progress (WIP) updates at key stages. Your feedback is encouraged!</p>
</li>
<li><p><strong>Revisions</strong>: Minor revisions are free within reason. Large changes after texturing or rigging may incur additional fees.</p>
</li>
<li><p><strong>Final Payment &amp; Delivery</strong>: Once the model is complete, the remaining balance is due. You’ll receive all necessary files, including VRM, FBX, and Unity Package formats.</p>
</li>
</ol>
<hr>
<p><strong>Important Note</strong></p>
<ul>
<li>Reading my <strong>Terms of Service</strong> is required before submitting a commission request.</li>
<li>By filling out the <strong>Contact</strong> form, you confirm that you have read and agree to the Terms of Service.</li>
</ul>
<hr>
<p><strong>Reference Requirements</strong></p>
<ul>
<li>I do not design characters or help conceptualize client designs.</li>
<li>Clients must provide a <strong>detailed reference sheet</strong> that clearly shows the character’s design from multiple angles (front, side, and back views are ideal).</li>
<li>The reference should include details for the character’s clothing, colors, and any accessories that will be part of the final model.</li>
<li>I will not accept <strong>mood boards</strong> as a reference sheet.</li>
</ul>
<hr>
<p><strong>Pricing Breakdown</strong></p>
<table>
<thead>
<tr>
<th><strong>Service</strong></th>
<th><strong>Base Price</strong></th>
<th><strong>Additional Costs</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Custom 3D Character Model</td>
<td>$800+</td>
<td>Complex designs, armor, pets</td>
</tr>
<tr>
<td>VRChat Avatar Setup</td>
<td>$250+</td>
<td>Complex props, custom emotes</td>
</tr>
<tr>
<td>Custom Outfit Design</td>
<td>$200+</td>
<td>Complex patterns, multiple items</td>
</tr>
<tr>
<td>ARKit Tracking Integration</td>
<td>$300+</td>
<td>Custom blendshapes, extra expressions</td>
</tr>
<tr>
<td>VRChat World Creation</td>
<td>$1,000+</td>
<td>Interactive features, large worlds</td>
</tr>
<tr>
<td>Small Props &amp; Accessories</td>
<td>$50+</td>
<td>Complexity, interactivity</td>
</tr>
</tbody>
</table>
<blockquote>
<p><strong>Note</strong>: Prices may vary depending on the complexity and scope of the project. Custom features, intricate designs, and specialized needs may increase the final cost.</p>
</blockquote>
<hr>
<p><strong>Payment Terms</strong></p>
<ul>
<li>50% deposit required to begin the commission.</li>
<li>Final payment is due before file delivery.</li>
<li>Payments are accepted via PayPal, Stripe, or VGen.</li>
<li>Payment plans are available for projects exceeding <strong>$1,000</strong>.</li>
</ul>
<hr>
<p><strong>Revisions &amp; Changes</strong></p>
<ul>
<li>Minor adjustments are free if requested during the modeling or rigging stages.</li>
<li>Changes after texturing or rigging may require an additional fee.</li>
<li>Full reworks or changes to the core concept are considered new commissions.</li>
</ul>
<hr>
<p><strong>File Delivery</strong>
You’ll receive your files in the following formats (based on your needs):</p>
<ul>
<li><strong>FBX</strong>: Universal 3D file for most animation and game engines.</li>
<li><strong>VRM</strong>: Ready-to-use file for Vtubing platforms.</li>
<li><strong>Unity Package</strong>: Pre-set Unity file for use in VRChat.</li>
</ul>
<hr>
<p><strong>Ready to Bring Your Vision to Life?</strong>
Click the <strong>Contact</strong> button to get in touch and start your commission today. I’m here to answer your questions and bring your unique ideas to life!</p>

	`,
    contact: `
        <div class="g-form-container"><iframe class="responsive-iframe" src="https://docs.google.com/forms/d/e/1FAIpQLSfbPA4rXWDhn8WC0FNK2PKgo7XWTMIupodT29nA7Ohh045Geg/viewform?embedded=true">Loading…</iframe></div>
    `,
    tos: `
        <h1>Terms Of Service</h1>
        <p><p><span style="font-size:11pt;font-family:Exo,sans-serif;">Before starting a project, we need to make sure we are on the same page so there aren&apos;t misunderstandings and to protect against fraud, so please take some time to read through these terms! Thank you.</span></p>
<p><br></p>
<p><span style="font-size:11pt;font-family:Exo,sans-serif;">This Terms of Service Agreement (&quot;Agreement&quot;) is entered into between the Artist and the Client for the commission of an artwork (&quot;Work&quot;). By commissioning the Artist, the Client agrees to the following terms:</span></p>
<p><br></p>
<ol>
    <li style="list-style-type:decimal;font-size:11pt;font-family:Exo,sans-serif;">
        <p><strong><span style="font-size:11pt;font-family:Exo,sans-serif;">ENGAGEMENT</span></strong></p>
        <ol>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Client provides clear and complete requirements and expectations upfront, including reference materials or assets before Work begins.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Client grants to the Artist non-exclusive rights to observe and replicate Client&rsquo;s own character design, reference material and other intellectual property for the use of the Work.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Client warrants that the character design, reference material and other intellectual property provided to the Artist are legally obtained and authorised for use by the Client.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Client warrants that they have the authority to enter this agreement, be the point of contact and is solely responsible for decisions and approval during the process.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Artist strives to perform to the best of their ability in good faith and warrants Work is 100% original according to Artist&rsquo;s best knowledge.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Artist may use commercially licensed, copyright-free and/or educational materials, assets and/or tools.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Artist warrants that they will not copy or heavily reference unauthorised materials.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Artist reserves the right to refuse projects or requests based on content, subject, or other reasons.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Artist defines scope of work, features, price, deliverables and other details for the project in a proposal in a format according to Artist discretion which may include private message through Discord or Twitter, VGen &nbsp;platform, Google document, or email. The details set forth by the Artist shall be agreed upon by the Client before work begins.</span></p>
            </li>
        </ol>
    </li>
</ol>
<p><br></p>
<ol start="2">
    <li style="list-style-type:decimal;font-size:11pt;font-family:Exo,sans-serif;">
        <p><strong><span style="font-size:11pt;font-family:Exo,sans-serif;">CONTENT RESTRICTIONS</span></strong></p>
        <ol>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Artist will not create content that is explicit, offensive, or inappropriate.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Specific restrictions include but are not limited to ___________ (i.</span><em><span style="font-size:11pt;font-family:Exo,sans-serif;">e. furries, mechs, explicit adult content, underage characters, excessive muscles, gore, copied styles, and gender identities or cultures the Artist may not be able to portray authenticall</span></em><span style="font-size:11pt;font-family:Exo,sans-serif;">y.)</span></p>
            </li>
        </ol>
    </li>
</ol>
<p><br></p>
<ol start="3">
    <li style="list-style-type:decimal;font-size:11pt;font-family:Exo,sans-serif;">
        <p><strong><span style="font-size:11pt;font-family:Exo,sans-serif;">TIMELINE AND PROCESS</span></strong></p>
        <ol>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Work completion requires ______&nbsp;</span><em><span style="font-size:11pt;font-family:Exo,sans-serif;">(i.e. 2 weeks minimum),</span></em><span style="font-size:11pt;font-family:Exo,sans-serif;">&nbsp;and may take up to _______</span><em><span style="font-size:11pt;font-family:Exo,sans-serif;"> (i.e. 7 months)</span></em><span style="font-size:11pt;font-family:Exo,sans-serif;">&nbsp;depending on each project.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Timeline depends on commission type, complexity, and workload.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Client should plan launches and streams accordingly.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Artist provides progress updates and seeks Client feedback voluntarily.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Final deliverables are provided by the Artist using the VGen platform, email, Google Drive or similar file transfer tools, in _____ (</span><em><span style="font-size:11pt;font-family:Exo,sans-serif;">PSD, PNG, SVG, AI, etc</span></em><span style="font-size:11pt;font-family:Exo,sans-serif;">) formats as applicable. Any files hosted by the Artist will be available for the Client to download for _____ (</span><em><span style="font-size:11pt;font-family:Exo,sans-serif;">days, weeks, months).</span></em></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">If there are any delays and adjustments to timeline, the Artist will inform the Client.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Clients must first agree to delays and amendments to timeline exceeding ______&nbsp;</span><em><span style="font-size:11pt;font-family:Exo,sans-serif;">(i.e. 3 months</span></em><span style="font-size:11pt;font-family:Exo,sans-serif;">) through standard communication channels.&nbsp;</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Clients have the right to request refunds ______&nbsp;</span><em><span style="font-size:11pt;font-family:Exo,sans-serif;">(i.e. 3 months</span></em><span style="font-size:11pt;font-family:Exo,sans-serif;">) after deadlines according to 8.c. if Work has not been delivered and there was no agreed upon amendment to the timeline.</span></p>
            </li>
        </ol>
    </li>
</ol>
<p><br></p>
<ol start="4">
    <li style="list-style-type:decimal;font-size:11pt;font-family:Exo,sans-serif;">
        <p><strong><span style="font-size:11pt;font-family:Exo,sans-serif;">REVISIONS</span></strong></p>
        <ol>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">One revision is allowed per item shown to the Client during the process.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">(</span><em><span style="font-size:11pt;font-family:Exo,sans-serif;">i.e. After line art, only minor revisions are allowed.)</span></em></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Additional charges for excessive revisions may be required.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Revisions may affect progress and timeline.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Clients may not edit the work after final delivery unless specified in the commission information, project outlines or otherwise approved by the Artist.</span></p>
            </li>
        </ol>
    </li>
</ol>
<p><br></p>
<ol start="5">
    <li style="list-style-type:decimal;font-size:11pt;font-family:Exo,sans-serif;">
        <p><strong><span style="font-size:11pt;font-family:Exo,sans-serif;">COMMUNICATION</span></strong></p>
        <ol>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Ongoing communication and discussion will occur throughout the project, including work in progress, idea generation and collaboration, situational updates, and more.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Communication channels may include ______ (</span><em><span style="font-size:11pt;font-family:Exo,sans-serif;">i.e. a dedicated commission Discord server, Discord or Twitter private messages, Trello, or others</span></em><span style="font-size:11pt;font-family:Exo,sans-serif;">) according to Artist discretion.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Artist response time may vary, up to ______</span><em><span style="font-size:11pt;font-family:Exo,sans-serif;"> (i.e. one week</span></em><span style="font-size:11pt;font-family:Exo,sans-serif;">) in order to provide better or more concrete updates.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">The Artist and Client agree to discuss relevant matters concerning the project. Both parties have the right to decline other topics of discussion.</span></p>
            </li>
        </ol>
    </li>
</ol>
<p><br></p>
<ol start="6">
    <li style="list-style-type:decimal;font-size:11pt;font-family:Exo,sans-serif;">
        <p><strong><span style="font-size:11pt;font-family:Exo,sans-serif;">RIGHTS &amp; USAGE</span></strong></p>
        <ol>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Artist General Rights</span></p>
                <ol>
                    <li style="list-style-type:lower-roman;font-size:11pt;font-family:Exo,sans-serif;">
                        <p><span style="font-size:11pt;font-family:Exo,sans-serif;">By default, Artist retains copyright, ownership, redistribution and intellectual property rights, which includes but is not limited to display, advertising, printing, the Work and work in progress on websites, social media, portfolios, public broadcast channels (i.e. Twitch) and more, exempting when some or all of these rights are transferred to the Client under express agreement or project specifications.</span></p>
                    </li>
                    <li style="list-style-type:lower-roman;font-size:11pt;font-family:Exo,sans-serif;">
                        <p><span style="font-size:11pt;font-family:Exo,sans-serif;">The Artist may use rejected work in progress and versions for other projects according to their discretion, under the condition that it does not infringe the Client&apos;s intellectual property rights and ownership of their likeness, character design, branding, identity design or any such trademarks.</span></p>
                    </li>
                    <li style="list-style-type:lower-roman;font-size:11pt;font-family:Exo,sans-serif;">
                        <p><em><span style="font-size:11pt;font-family:Exo,sans-serif;">(Optional)</span></em><span style="font-size:11pt;font-family:Exo,sans-serif;">&nbsp;The Artist retains the non exclusive rights to sell merchandise and prints of their Work, unless exclusive commercial rights are purchased by the Client.</span></p>
                    </li>
                </ol>
            </li>
        </ol>
    </li>
</ol>
<p><br></p>
<ol start="2">
    <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
        <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Client Rights for Personal Use Licensed Works</span></p>
        <ol>
            <li style="list-style-type:lower-roman;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Clients receive non-transferable usage rights to the Work for personal use. Refer to Section 6.c. for commercial rights.</span></p>
            </li>
            <li style="list-style-type:lower-roman;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Personal use means: display on social media accounts for promotional purposes with no direct monetization or sales, such as social media profile pictures, banners, and posts; print and framing in personal spaces; display as part of designs on websites and channels, excluding use in content of these websites or channels; or any other instances where no monetization of, or of content featuring, the Work is involved.</span></p>
            </li>
            <li style="list-style-type:lower-roman;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Client must not claim Work as their own and must credit Artist using their social tag/username/link at the instance of display of the Work or permanently on their websites, social media profiles, broadcast channels and so on where possible.</span></p>
            </li>
        </ol>
    </li>
</ol>
<p><br></p>
<ol start="3">
    <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
        <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Client Rights for Commercial Use Licensed Works</span></p>
        <ol>
            <li style="list-style-type:lower-roman;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Commercial usage rights are not included in general commissions, unless specified in the commission type or project specifications listed on the Artist&rsquo;s websites (i.e. vtuber models, stream overlays, emotes, and so forth), or is purchased by the Client and agreed upon.</span></p>
            </li>
            <li style="list-style-type:lower-roman;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Commercial rights may differ for each commission type. Commercial broadcast rights means usage of Work on streams, videos, advertisements and other content, or any similar monetized instances; commercial distribution rights means selling or reselling Work to another party, as a part of any product or merchandising, or on another platform.</span></p>
            </li>
            <li style="list-style-type:lower-roman;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">In the case of original design work and assets for the purpose and definition of the Client&apos;s brand identity such as character design, logo design, and more, intellectual property rights of the designs and their likeness are exclusively transferred to the Client for use, production and modification purposes, commercial or personal. (</span><em><span style="font-size:11pt;font-family:Exo,sans-serif;">Please clarify in further detail for each type of work if necessary)</span></em></p>
            </li>
            <li style="list-style-type:lower-roman;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Usage of Work for AI (artificial intelligence) tools, platforms or programs; ML (machine learning) tools, platforms or programs; AI or ML training; NFT; blockchain; or other for-profit platforms/purposes, is strictly prohibited.</span></p>
            </li>
            <li style="list-style-type:lower-roman;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Additional charges will be required for commercial usage if not included in the project type, listing, or specifications, typically 2x of the original cost.</span></p>
            </li>
        </ol>
    </li>
</ol>
<p><br></p>
<ol start="7">
    <li style="list-style-type:decimal;font-size:11pt;font-family:Exo,sans-serif;">
        <p><strong><span style="font-size:11pt;font-family:Exo,sans-serif;">PAYMENTS &amp; FEES</span></strong></p>
        <ol>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><em><span style="font-size:11pt;font-family:Exo,sans-serif;">(optional)</span></em><span style="font-size:11pt;font-family:Exo,sans-serif;">&nbsp;Client pays a (non-refundable) _____ deposit deducted from the project fees for waitlist bookings.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Client pays _______&nbsp;</span><em><span style="font-size:11pt;font-family:Exo,sans-serif;">(i.e. in full up to $150 value, or pays a 50% downpayment for higher value projects.)</span></em></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><em><span style="font-size:11pt;font-family:Exo,sans-serif;">(i.e. In the case of projects above $150, the final 50% is due at first complete watermarked or low resolution preview of the final deliverables.)</span></em></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Invoices, proposal or payment link will be sent to the Client when Artist is ready to begin work. Clients must not send money before these requests for payment from the Artist.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Invoices must be paid within ____&nbsp;</span><em><span style="font-size:11pt;font-family:Exo,sans-serif;">(i.e. 72 hours</span></em><span style="font-size:11pt;font-family:Exo,sans-serif;">), or the project may be cancelled.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Prices are in USD, and paid via VGen, Stripe, PayPal, or methods as provided by the Artist.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Prices may vary or change depending on complexity, requirements and/or additional requests.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Once Work has begun or payments have been made, the Client acknowledges Work and deliverables are digital and there are no physically shipped goods to receive.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Client agrees that they will not issue chargebacks and the refund policy mentioned below will be followed.</span></p>
            </li>
        </ol>
    </li>
</ol>
<p><br></p>
<p><br></p>
<ol start="8">
    <li style="list-style-type:decimal;font-size:11pt;font-family:Exo,sans-serif;">
        <p><strong><span style="font-size:11pt;font-family:Exo,sans-serif;">CANCELLATION &amp; REFUNDS</span></strong></p>
        <ol>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">If Client requests cancellation, __________&nbsp;</span><em><span style="font-size:11pt;font-family:Exo,sans-serif;">(i.e. 50% of project fees may be forfeit if cancelled within 2 days before work starts. A partial to full refund may be provided if there is more than 2 days&rsquo; notice.)</span></em></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">No refunds are possible after work begins unless initiated by the Artist and except for circumstances due to the Artist as detailed in 8.c. and Section 3.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">If Artist cannot complete work or there are delays as detailed in Section 3 for unforeseen reasons, the Client may be eligible for a full refund. If work done up to this point is accepted and used by the Client, the Artist will provide a partial refund according to the amount of work complete.</span></p>
            </li>
        </ol>
    </li>
</ol>
<p><br></p>
<ol start="9">
    <li style="list-style-type:decimal;font-size:11pt;font-family:Exo,sans-serif;">
        <p><strong><span style="font-size:11pt;font-family:Exo,sans-serif;">CONFIDENTIALITY</span></strong></p>
        <ol>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">The Artist and Client acknowledges that information and materials that are provided to either party (including but not limited to personal information, technical information, marketing plans, payment information, or sensitive business information) outside of the development of Work, that will not be visible to the public, shall be considered confidential information and shall not be disclosed to any other party without prior written permission from the owner of this confidential information.</span></p>
            </li>
        </ol>
    </li>
</ol>
<p><br></p>
<ol start="10">
    <li style="list-style-type:decimal;font-size:11pt;font-family:Exo,sans-serif;">
        <p><strong><span style="font-size:11pt;font-family:Exo,sans-serif;">INDEMNIFICATION</span></strong></p>
        <ol>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Client indemnifies Artist against claims, losses, damages, and expenses related to Work usage by the Client, breach by the Client of the Agreement, or third-party claims.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">If Client&apos;s rights and the terms of this agreement are violated or the Work is not delivered as agreed, due to Artist negligence, Artist will work to remedy the situation first according to the terms aforementioned and otherwise to the satisfaction of the Client.</span></p>
            </li>
        </ol>
    </li>
</ol>
<p><br></p>
<ol start="11">
    <li style="list-style-type:decimal;font-size:11pt;font-family:Exo,sans-serif;">
        <p><strong><span style="font-size:11pt;font-family:Exo,sans-serif;">ACCEPTANCE</span></strong></p>
        <ol>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Client is 18+ and legally able to commit to an agreement or has a legal guardian to make this agreement on their behalf.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Agreement date is upon first inquiry/communication or first transaction.&nbsp;</span><em><span style="font-size:11pt;font-family:Exo,sans-serif;">(or by use a digital signature program for a more legally binding and enforceable agreement if the Artist does choose to)</span></em></p>
            </li>
        </ol>
    </li>
</ol>
<p><br></p>
<p><span style="font-size:11pt;font-family:Exo,sans-serif;">Note: Businesses, agencies, groups and other organizations should contact the Artist to discuss arrangements in more detail.</span></p></p>
    `
};

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const target = link.getAttribute('data-target');

        contentPanel.innerHTML = content[target];
    });
});