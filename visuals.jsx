// Soft, abstract storybook visuals (SVG). No literal characters — abstracted shapes.

const { useId } = React;

// Maps theme colors to CSS variables defined in styles.css
const colorPair = (key) => {
  const map = {
    peach: ["#F4D2BC", "#D98E68"],
    butter: ["#F8E8B8", "#F0D78F"],
    sage: ["#D6DECF", "#A8B89F"],
    sky: ["#DFEAEE", "#BCD4DC"],
    plum: ["#E8DCE2", "#B89BA8"],
  };
  return map[key] || map.peach;
};

// Hero illustration — soft hills, sun, abstracted figures suggesting "Miśka + Ptyś" outdoors.
function HeroScene() {
  return (
    <svg viewBox="0 0 500 600" preserveAspectRatio="xMidYMid slice">
      {/* sun */}
      <circle cx="370" cy="170" r="78" fill="#F8C58A" opacity="0.85" />
      <circle cx="370" cy="170" r="64" fill="#FBD9A8" />

      {/* far hill */}
      <path d="M0,420 C100,360 220,380 330,360 C420,344 470,360 500,370 L500,600 L0,600 Z"
        fill="#C8D9CF" />
      {/* near hill */}
      <path d="M0,470 C90,430 200,450 280,430 C380,408 460,440 500,440 L500,600 L0,600 Z"
        fill="#A8B89F" />
      {/* foreground meadow */}
      <path d="M0,520 C140,490 320,520 500,500 L500,600 L0,600 Z" fill="#7E9A82" />

      {/* tiny path */}
      <path d="M240,520 Q260,560 250,600" stroke="#FBE6D6" strokeWidth="14" fill="none" strokeLinecap="round" />

      {/* abstracted child + fox shapes (silhouette only, viewed from behind) */}
      {/* child */}
      <g transform="translate(220 410)">
        {/* hair/hood */}
        <ellipse cx="35" cy="20" rx="32" ry="26" fill="#3D2B1F" />
        {/* body coat */}
        <path d="M0,40 Q0,30 12,28 L58,28 Q70,30 70,40 L74,110 Q66,116 35,116 Q4,116 -4,110 Z"
          fill="#D98E68" />
        {/* tiny strap */}
        <rect x="14" y="38" width="42" height="3" fill="#B8704F" rx="1" />
      </g>

      {/* fox plushie peeking from backpack */}
      <g transform="translate(258 396)">
        <ellipse cx="14" cy="14" rx="14" ry="13" fill="#E8A87C" />
        <path d="M2,8 L8,2 L10,12 Z" fill="#E8A87C" />
        <path d="M26,8 L20,2 L18,12 Z" fill="#E8A87C" />
        <circle cx="9" cy="14" r="1.8" fill="#3D2B1F" />
        <circle cx="19" cy="14" r="1.8" fill="#3D2B1F" />
        <ellipse cx="14" cy="19" rx="2" ry="1.4" fill="#3D2B1F" />
        <path d="M6,18 Q14,14 22,18" stroke="#FFFFFF" strokeWidth="1.5" fill="none" opacity="0.4" />
      </g>

      {/* small bird/cloud accents */}
      <ellipse cx="80" cy="120" rx="40" ry="14" fill="#FFFFFF" opacity="0.7" />
      <ellipse cx="130" cy="110" rx="26" ry="10" fill="#FFFFFF" opacity="0.7" />
      <path d="M150,200 q10,-10 20,0" stroke="#3D2B1F" strokeWidth="2" fill="none" opacity="0.4" strokeLinecap="round" />
      <path d="M180,220 q8,-8 16,0" stroke="#3D2B1F" strokeWidth="2" fill="none" opacity="0.4" strokeLinecap="round" />

      {/* grass tufts */}
      <g fill="#5C7A66" opacity="0.7">
        <path d="M40,540 q4,-14 8,0" />
        <path d="M120,560 q4,-10 8,0" />
        <path d="M380,540 q4,-12 8,0" />
        <path d="M450,565 q4,-10 8,0" />
      </g>
    </svg>
  );
}

// Generic episode artwork — themed soft scene
function EpisodeArt({ theme = "kurtka", palette = ["peach", "butter"] }) {
  const [bg, fg] = palette.map(colorPair).flat().filter((_, i) => i % 2 === 0);
  const [, bgDeep] = colorPair(palette[0]);
  return (
    <svg viewBox="0 0 400 320" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="320" fill={bg} />
      {/* soft light */}
      <ellipse cx="320" cy="80" rx="110" ry="70" fill="#FFFFFF" opacity="0.45" />
      <ellipse cx="80" cy="260" rx="120" ry="60" fill={bgDeep} opacity="0.35" />

      {/* themed glyph */}
      {theme === "kurtka" && (
        <g transform="translate(140 100)">
          {/* coat hanger */}
          <path d="M60,8 q0,-12 -10,-12 q-10,0 -10,10" stroke="#3D2B1F" strokeWidth="3" fill="none" />
          <path d="M10,30 L60,12 L110,30 L100,160 L20,160 Z" fill="#D98E68" />
          <path d="M55,30 L65,30 L65,160 L55,160 Z" fill="#B8704F" />
          <circle cx="48" cy="80" r="3" fill="#3D2B1F" />
          <circle cx="48" cy="100" r="3" fill="#3D2B1F" />
          <circle cx="48" cy="120" r="3" fill="#3D2B1F" />
        </g>
      )}
      {theme === "kot" && (
        <g transform="translate(140 90)">
          {/* curled cat silhouette */}
          <ellipse cx="60" cy="100" rx="80" ry="44" fill="#6E5F52" />
          <path d="M0,90 L20,40 L40,86 Z" fill="#6E5F52" />
          <path d="M120,90 L100,40 L80,86 Z" fill="#6E5F52" />
          <circle cx="36" cy="86" r="3" fill="#F0D78F" />
          <circle cx="84" cy="86" r="3" fill="#F0D78F" />
          <path d="M50,98 q10,8 20,0" stroke="#F0D78F" strokeWidth="2" fill="none" />
          <path d="M120,140 q30,-30 18,-50" stroke="#6E5F52" strokeWidth="14" fill="none" strokeLinecap="round" />
        </g>
      )}
      {theme === "zegar" && (
        <g transform="translate(150 70)">
          <circle cx="50" cy="80" r="80" fill="#FBD9A8" />
          <circle cx="50" cy="80" r="80" fill="none" stroke="#B8704F" strokeWidth="3" />
          <circle cx="50" cy="80" r="68" fill="#FFFFFF" />
          <line x1="50" y1="80" x2="50" y2="30" stroke="#3D2B1F" strokeWidth="4" strokeLinecap="round" />
          <line x1="50" y1="80" x2="86" y2="92" stroke="#3D2B1F" strokeWidth="3" strokeLinecap="round" />
          <circle cx="50" cy="80" r="4" fill="#3D2B1F" />
          {[0, 1, 2, 3].map((i) => {
            const a = (i * 90 - 90) * Math.PI / 180;
            return <circle key={i} cx={50 + Math.cos(a) * 60} cy={80 + Math.sin(a) * 60} r="2" fill="#3D2B1F" />;
          })}
        </g>
      )}
      {theme === "babcia" && (
        <g transform="translate(120 70)">
          {/* knitted sweater suggested */}
          <rect x="20" y="40" width="120" height="140" rx="20" fill="#B89BA8" />
          <path d="M40,50 q10,16 20,0 M70,50 q10,16 20,0 M100,50 q10,16 20,0" stroke="#E8DCE2" strokeWidth="2" fill="none" />
          <path d="M40,80 q10,16 20,0 M70,80 q10,16 20,0 M100,80 q10,16 20,0" stroke="#E8DCE2" strokeWidth="2" fill="none" />
          <path d="M40,110 q10,16 20,0 M70,110 q10,16 20,0 M100,110 q10,16 20,0" stroke="#E8DCE2" strokeWidth="2" fill="none" />
          <path d="M40,140 q10,16 20,0 M70,140 q10,16 20,0 M100,140 q10,16 20,0" stroke="#E8DCE2" strokeWidth="2" fill="none" />
          <circle cx="80" cy="20" r="22" fill="#FBE6D6" />
        </g>
      )}
      {theme === "plac" && (
        <g transform="translate(60 100)">
          {/* slide */}
          <path d="M20,140 Q40,40 140,40 L160,40 L160,60 Q60,60 40,140 Z" fill="#A8B89F" />
          <rect x="160" y="40" width="6" height="100" fill="#6E8C72" />
          <rect x="20" y="135" width="160" height="6" fill="#7E9A82" />
          {/* ball */}
          <circle cx="220" cy="120" r="22" fill="#D98E68" />
          <path d="M198,120 q22,-20 44,0" stroke="#FFFFFF" strokeWidth="2" fill="none" opacity="0.6" />
        </g>
      )}
      {theme === "walizka" && (
        <g transform="translate(110 90)">
          <rect x="0" y="20" width="180" height="120" rx="14" fill="#D98E68" />
          <rect x="0" y="20" width="180" height="120" rx="14" fill="none" stroke="#B8704F" strokeWidth="3" />
          <rect x="80" y="0" width="20" height="22" fill="#3D2B1F" rx="3" />
          <rect x="20" y="60" width="50" height="6" fill="#FBE6D6" />
          <rect x="20" y="78" width="80" height="6" fill="#FBE6D6" />
          <circle cx="20" cy="140" r="6" fill="#3D2B1F" />
          <circle cx="160" cy="140" r="6" fill="#3D2B1F" />
        </g>
      )}
      {theme === "lake" && (
        <g>
          {/* sky */}
          <rect width="400" height="180" fill="#DFEAEE" />
          {/* sun */}
          <circle cx="80" cy="80" r="38" fill="#F8C58A" />
          {/* lake */}
          <rect y="180" width="400" height="140" fill="#A8C9D0" />
          <path d="M0,200 q20,8 40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0" stroke="#FFFFFF" strokeWidth="2" fill="none" opacity="0.6" />
          <path d="M0,230 q20,8 40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0" stroke="#FFFFFF" strokeWidth="2" fill="none" opacity="0.5" />
          {/* dock + small figure */}
          <rect x="180" y="180" width="80" height="10" fill="#8B6F4D" />
          <rect x="186" y="190" width="6" height="50" fill="#8B6F4D" />
          <rect x="248" y="190" width="6" height="50" fill="#8B6F4D" />
          <ellipse cx="220" cy="172" rx="10" ry="8" fill="#3D2B1F" />
          <path d="M210,180 L210,200 L230,200 L230,180 Z" fill="#D98E68" />
        </g>
      )}
    </svg>
  );
}

// Character "portrait" — abstract symbolic shape, not a literal drawing
function CharacterGlyph({ glyph, color = "peach" }) {
  const [bg, fg] = colorPair(color);
  if (glyph === "miska") {
    return (
      <svg viewBox="0 0 100 100">
        <circle cx="50" cy="48" r="34" fill="#3D2B1F" />
        <ellipse cx="50" cy="60" rx="22" ry="20" fill="#FBE6D6" />
        <circle cx="42" cy="58" r="2.2" fill="#3D2B1F" />
        <circle cx="58" cy="58" r="2.2" fill="#3D2B1F" />
        <path d="M44,68 q6,5 12,0" stroke="#3D2B1F" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="38" cy="64" r="3" fill="#E8A87C" opacity="0.6" />
        <circle cx="62" cy="64" r="3" fill="#E8A87C" opacity="0.6" />
      </svg>
    );
  }
  if (glyph === "ptys") {
    return (
      <svg viewBox="0 0 100 100">
        <ellipse cx="50" cy="58" rx="34" ry="32" fill="#E8A87C" />
        <path d="M14,30 L26,12 L34,42 Z" fill="#E8A87C" />
        <path d="M86,30 L74,12 L66,42 Z" fill="#E8A87C" />
        <ellipse cx="50" cy="64" rx="20" ry="16" fill="#FBE6D6" />
        <circle cx="42" cy="56" r="2.5" fill="#3D2B1F" />
        <circle cx="58" cy="56" r="2.5" fill="#3D2B1F" />
        <ellipse cx="50" cy="66" rx="3" ry="2" fill="#3D2B1F" />
        <path d="M50,68 L50,74 M44,72 q6,4 12,0" stroke="#3D2B1F" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    );
  }
  if (glyph === "figa") {
    return (
      <svg viewBox="0 0 100 100">
        <ellipse cx="50" cy="60" rx="32" ry="28" fill="#6E5F52" />
        <path d="M22,38 L30,18 L38,42 Z" fill="#6E5F52" />
        <path d="M78,38 L70,18 L62,42 Z" fill="#6E5F52" />
        <ellipse cx="42" cy="58" rx="3.5" ry="5" fill="#F0D78F" />
        <ellipse cx="58" cy="58" rx="3.5" ry="5" fill="#F0D78F" />
        <ellipse cx="50" cy="68" rx="2" ry="1.4" fill="#3D2B1F" />
        <path d="M44,72 q6,4 12,0" stroke="#3D2B1F" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <line x1="32" y1="68" x2="20" y2="66" stroke="#3D2B1F" strokeWidth="1" />
        <line x1="32" y1="72" x2="20" y2="74" stroke="#3D2B1F" strokeWidth="1" />
        <line x1="68" y1="68" x2="80" y2="66" stroke="#3D2B1F" strokeWidth="1" />
        <line x1="68" y1="72" x2="80" y2="74" stroke="#3D2B1F" strokeWidth="1" />
      </svg>
    );
  }
  if (glyph === "stefan") {
    return (
      <svg viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="34" fill="#FBE6D6" />
        <path d="M30,38 q4,-6 8,0 M62,38 q4,-6 8,0" stroke="#3D2B1F" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="34" cy="46" r="2" fill="#3D2B1F" />
        <circle cx="66" cy="46" r="2" fill="#3D2B1F" />
        <path d="M44,60 q6,6 12,0" stroke="#3D2B1F" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* tuft of hair */}
        <path d="M50,16 q-6,-8 0,-12 q6,12 6,16" fill="#3D2B1F" />
      </svg>
    );
  }
  if (glyph === "parents") {
    return (
      <svg viewBox="0 0 100 100">
        {/* mama */}
        <circle cx="38" cy="46" r="22" fill="#B89BA8" />
        <ellipse cx="38" cy="54" rx="13" ry="10" fill="#FBE6D6" />
        <circle cx="34" cy="52" r="1.6" fill="#3D2B1F" />
        <circle cx="42" cy="52" r="1.6" fill="#3D2B1F" />
        <path d="M34,58 q4,3 8,0" stroke="#3D2B1F" strokeWidth="1.4" fill="none" strokeLinecap="round" />
        {/* tata */}
        <circle cx="66" cy="50" r="22" fill="#D98E68" />
        <ellipse cx="66" cy="58" rx="13" ry="10" fill="#FBE6D6" />
        <circle cx="62" cy="56" r="1.6" fill="#3D2B1F" />
        <circle cx="70" cy="56" r="1.6" fill="#3D2B1F" />
        <path d="M62,62 q4,3 8,0" stroke="#3D2B1F" strokeWidth="1.4" fill="none" strokeLinecap="round" />
        <path d="M58,42 L74,42 L72,46 L60,46 Z" fill="#3D2B1F" opacity="0.5" />
      </svg>
    );
  }
  return null;
}

// Featured episode (lake scene)
function FeaturedArt() {
  return (
    <svg viewBox="0 0 600 500" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="sky2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FBD9A8" />
          <stop offset="100%" stopColor="#DFEAEE" />
        </linearGradient>
        <linearGradient id="lake2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#A8C9D0" />
          <stop offset="100%" stopColor="#6E8893" />
        </linearGradient>
      </defs>
      <rect width="600" height="320" fill="url(#sky2)" />
      <circle cx="450" cy="120" r="56" fill="#FBE6D6" opacity="0.9" />
      {/* trees on far shore */}
      <g opacity="0.7">
        <ellipse cx="60" cy="290" rx="40" ry="18" fill="#7E9A82" />
        <ellipse cx="120" cy="290" rx="50" ry="20" fill="#5C7A66" />
        <ellipse cx="540" cy="290" rx="44" ry="18" fill="#7E9A82" />
      </g>
      <rect y="290" width="600" height="40" fill="#5C7A66" />
      <rect y="320" width="600" height="180" fill="url(#lake2)" />
      {/* ripples */}
      <g stroke="#FFFFFF" strokeWidth="1.5" fill="none" opacity="0.5">
        <path d="M40,360 q40,8 80,0 t80,0 t80,0 t80,0 t80,0 t80,0" />
        <path d="M0,400 q40,8 80,0 t80,0 t80,0 t80,0 t80,0 t80,0 t80,0" />
        <path d="M40,440 q40,8 80,0 t80,0 t80,0 t80,0 t80,0 t80,0" />
      </g>
      {/* dock */}
      <rect x="240" y="320" width="120" height="14" fill="#8B6F4D" />
      <rect x="246" y="334" width="8" height="60" fill="#8B6F4D" />
      <rect x="346" y="334" width="8" height="60" fill="#8B6F4D" />
      {/* small girl silhouette at end of dock */}
      <g transform="translate(294 290)">
        <ellipse cx="6" cy="-2" rx="11" ry="9" fill="#3D2B1F" />
        <path d="M-4,8 Q-4,4 0,4 L12,4 Q16,4 16,8 L18,32 Q14,34 6,34 Q-2,34 -6,32 Z" fill="#D98E68" />
      </g>
    </svg>
  );
}

// Parents-section illustration: tea + book on a windowsill
function ParentsArt() {
  return (
    <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="parentSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FBE6D6" />
          <stop offset="100%" stopColor="#DFEAEE" />
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill="url(#parentSky)" />
      {/* window frame */}
      <rect x="40" y="40" width="320" height="380" fill="none" stroke="#8B6F4D" strokeWidth="14" />
      <line x1="200" y1="46" x2="200" y2="414" stroke="#8B6F4D" strokeWidth="6" />
      <line x1="46" y1="230" x2="354" y2="230" stroke="#8B6F4D" strokeWidth="6" />

      {/* outside view: hills + sun */}
      <circle cx="280" cy="150" r="40" fill="#F8C58A" />
      <path d="M40,200 Q150,160 240,180 Q320,196 360,200 L360,228 L40,228 Z" fill="#A8B89F" />
      <path d="M40,330 Q150,300 240,320 Q320,332 360,338 L360,414 L40,414 Z" fill="#7E9A82" />

      {/* windowsill */}
      <rect x="20" y="420" width="360" height="14" fill="#8B6F4D" />
      <rect x="20" y="434" width="360" height="40" fill="#6E5034" />

      {/* mug */}
      <g transform="translate(80 380)">
        <rect x="0" y="0" width="50" height="44" rx="6" fill="#D98E68" />
        <ellipse cx="25" cy="0" rx="25" ry="6" fill="#3D2B1F" opacity="0.6" />
        <path d="M50,12 q14,4 14,16 q0,12 -14,12" stroke="#D98E68" strokeWidth="6" fill="none" />
        <path d="M18,-12 q4,-8 0,-16 M28,-12 q4,-8 0,-16" stroke="#FFFFFF" strokeWidth="2" fill="none" opacity="0.7" />
      </g>

      {/* book */}
      <g transform="translate(180 392)">
        <rect width="160" height="32" fill="#B89BA8" />
        <rect x="2" y="2" width="156" height="6" fill="#FFFFFF" opacity="0.6" />
        <text x="80" y="22" textAnchor="middle" fill="#3D2B1F" fontSize="10" fontFamily="serif" fontStyle="italic">Miśka i Ptyś</text>
      </g>
    </svg>
  );
}

// Tiny inline icon helper (lucide-style line icons we draw manually)
const Icon = ({ name, size = 18 }) => {
  const s = { width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "play": return <svg viewBox="0 0 24 24" {...s}><polygon points="6 4 20 12 6 20 6 4" fill="currentColor" stroke="none" /></svg>;
    case "pause": return <svg viewBox="0 0 24 24" {...s}><rect x="6" y="4" width="4" height="16" fill="currentColor" stroke="none" /><rect x="14" y="4" width="4" height="16" fill="currentColor" stroke="none" /></svg>;
    case "skip-back": return <svg viewBox="0 0 24 24" {...s}><polygon points="19 20 9 12 19 4 19 20" fill="currentColor" /><line x1="5" y1="19" x2="5" y2="5" /></svg>;
    case "skip-forward": return <svg viewBox="0 0 24 24" {...s}><polygon points="5 4 15 12 5 20 5 4" fill="currentColor" /><line x1="19" y1="5" x2="19" y2="19" /></svg>;
    case "x": return <svg viewBox="0 0 24 24" {...s}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>;
    case "plus": return <svg viewBox="0 0 24 24" {...s}><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>;
    case "spotify": return <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" /><path d="M7,10 q5,-2 10,1" stroke="white" strokeWidth="1.4" fill="none" /><path d="M7.5,13 q4,-1.5 8,1" stroke="white" strokeWidth="1.2" fill="none" /><path d="M8,15.5 q3,-1 6,0.5" stroke="white" strokeWidth="1" fill="none" /></svg>;
    case "apple": return <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 a10 10 0 1 0 0 20 a10 10 0 0 0 0 -20 z M12 5 a3 3 0 0 1 3 3 v8 a3 3 0 0 1 -6 0 v-8 a3 3 0 0 1 3 -3 z" /></svg>;
    case "youtube": return <svg viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="6" width="20" height="12" rx="3" /><polygon points="10 9 16 12 10 15" fill="white" /></svg>;
    case "heart": return <svg viewBox="0 0 24 24" {...s}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>;
    case "moon": return <svg viewBox="0 0 24 24" {...s}><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>;
    case "sparkle": return <svg viewBox="0 0 24 24" {...s}><path d="M12 3 L13 10 L20 11 L13 12 L12 19 L11 12 L4 11 L11 10 Z" fill="currentColor" stroke="none" /></svg>;
    case "leaf": return <svg viewBox="0 0 24 24" {...s}><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19.2 2.96c1.32 7.83-3.04 13.2-8.2 14.04 a4 4 0 0 0 -4 4z" /><path d="M2 21c0-3 1.85-5.36 5.08-6" /></svg>;
    case "headphones": return <svg viewBox="0 0 24 24" {...s}><path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" /><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" /></svg>;
    case "feather": return <svg viewBox="0 0 24 24" {...s}><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" /><line x1="16" y1="8" x2="2" y2="22" /><line x1="17.5" y1="15" x2="9" y2="15" /></svg>;
    case "check": return <svg viewBox="0 0 24 24" {...s}><polyline points="20 6 9 17 4 12" /></svg>;
    case "rss": return <svg viewBox="0 0 24 24" {...s}><path d="M4 11a9 9 0 0 1 9 9" /><path d="M4 4a16 16 0 0 1 16 16" /><circle cx="5" cy="19" r="1" fill="currentColor" /></svg>;
    default: return null;
  }
};

Object.assign(window, { HeroScene, EpisodeArt, CharacterGlyph, FeaturedArt, ParentsArt, Icon });
