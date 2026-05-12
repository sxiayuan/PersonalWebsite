(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/data/siteContent.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SITE_CONTENT",
    ()=>SITE_CONTENT
]);
const SITE_CONTENT = {
    hero: {
        name: 'Stephanie Xia',
        tagline: 'Engineer • Builder • Creator',
        description: 'Exploring growth through creative engineering. This is a cinematic journey through memories, projects, and evolving identity.',
        primaryCta: {
            label: 'Explore',
            href: '#me'
        },
        secondaryCta: {
            label: 'Get in Touch',
            href: '#contact'
        }
    },
    navigation: [
        {
            label: 'Home',
            href: '#home'
        },
        {
            label: 'Me',
            href: '#me'
        },
        {
            label: 'Summers',
            href: '#summers'
        },
        {
            label: 'Projects',
            href: '#projects'
        },
        {
            label: 'Experience',
            href: '#experience'
        },
        {
            label: 'Fashion',
            href: '#fashionista'
        },
        {
            label: 'Contact',
            href: '#contact'
        }
    ],
    sections: {
        me: {
            title: 'About Me',
            intro: 'Building products and systems that balance technical depth with human-centered storytelling.',
            points: [
                'Identity statement and the builder mindset',
                'Engineering interests and systems thinking',
                'Startup curiosity and product execution',
                'Themes: AI, robotics, product thinking, storytelling, entrepreneurship'
            ]
        },
        summers: {
            title: 'Summers',
            intro: 'A memory archive from 2023 through 2025 that documents experimentation, growth, and identity formation.',
            points: [
                'Each summer as a chapter with a clear growth theme',
                'Environmental storytelling that feels cinematic but readable',
                'Scroll-based transitions with intentional pacing',
                'Interactive memory objects for photos and details'
            ]
        },
        projects: {
            title: 'Projects',
            intro: 'Technical work presented with context, tradeoffs, and outcomes rather than only screenshots.',
            points: [
                'Project cards with problem, solution, and process',
                'Tech stack, architecture decisions, and constraints',
                'Challenges, iterations, and measurable outcomes',
                'Direct links to demos and repositories'
            ]
        },
        experience: {
            title: 'Experience',
            intro: 'A timeline of execution, leadership, and systems work across internships, teams, and initiatives.',
            points: [
                'Timeline layout with clear chronology and scope',
                'SHAD, FBLC, Finance International, VEX Robotics, and leadership highlights',
                'Skills and ownership called out per role',
                'Subtle motion only where it improves comprehension'
            ]
        },
        fashion: {
            title: 'Fashion & Creativity',
            intro: 'A multidimensional creative lane that complements engineering through visual storytelling and editorial direction.',
            points: [
                'Magazine-inspired layout and curated collections',
                'Thoughtful hover interactions and transitions',
                'Runway-inspired motion with restrained styling',
                'Confidence, artistic expression, and identity'
            ]
        },
        contact: {
            title: "Let's Build Something Cool",
            intro: 'If you are hiring, collaborating, or just want to connect, reach out directly through any channel below.'
        }
    },
    socialLinks: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
        resume: '/resume.pdf',
        email: 'stephanie@example.com'
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/Navigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$src$2f$data$2f$siteContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/data/siteContent.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Navigation() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const navigationItems = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$src$2f$data$2f$siteContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_CONTENT"].navigation;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-warmDark to-transparent",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center h-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "text-2xl font-bold text-warmGold hover:text-warmOrange transition",
                                children: "SX"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/Navigation.tsx",
                                lineNumber: 16,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/Navigation.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex space-x-8",
                            children: navigationItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: item.href,
                                    className: "text-sm font-medium text-gray-300 hover:text-warmGold transition duration-300",
                                    children: item.label
                                }, item.href, false, {
                                    fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/Navigation.tsx",
                                    lineNumber: 24,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/Navigation.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsOpen(!isOpen),
                                className: "text-gray-300 hover:text-warmGold transition",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M4 6h16M4 12h16M4 18h16"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/Navigation.tsx",
                                        lineNumber: 41,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/Navigation.tsx",
                                    lineNumber: 40,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/Navigation.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/Navigation.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/Navigation.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:hidden pb-4 space-y-2",
                    children: navigationItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: item.href,
                            className: "block text-sm font-medium text-gray-300 hover:text-warmGold transition duration-300",
                            onClick: ()=>setIsOpen(false),
                            children: item.label
                        }, item.href, false, {
                            fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/Navigation.tsx",
                            lineNumber: 51,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/Navigation.tsx",
                    lineNumber: 49,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/Navigation.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/Navigation.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_s(Navigation, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c = Navigation;
var _c;
__turbopack_context__.k.register(_c, "Navigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/LandingPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LandingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$src$2f$data$2f$siteContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/data/siteContent.ts [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const HeroScene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/three/HeroScene.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/three/HeroScene.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = HeroScene;
function LandingPage() {
    _s();
    const shouldReduceMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const { hero } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$src$2f$data$2f$siteContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_CONTENT"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "home",
        className: "relative w-full h-screen flex items-center justify-center bg-gradient-to-b from-warmDark via-gray-900 to-warmDark overflow-hidden pt-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroScene, {}, void 0, false, {
                fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/LandingPage.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute w-96 h-96 bg-warmGold rounded-full filter blur-3xl opacity-20",
                        animate: shouldReduceMotion ? undefined : {
                            x: [
                                0,
                                100,
                                -50,
                                0
                            ],
                            y: [
                                0,
                                -100,
                                50,
                                0
                            ]
                        },
                        transition: shouldReduceMotion ? undefined : {
                            duration: 15,
                            repeat: Infinity,
                            ease: 'easeInOut'
                        },
                        style: {
                            top: '10%',
                            left: '10%'
                        }
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/LandingPage.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute w-96 h-96 bg-warmOrange rounded-full filter blur-3xl opacity-10",
                        animate: shouldReduceMotion ? undefined : {
                            x: [
                                0,
                                -100,
                                50,
                                0
                            ],
                            y: [
                                0,
                                100,
                                -50,
                                0
                            ]
                        },
                        transition: shouldReduceMotion ? undefined : {
                            duration: 20,
                            repeat: Infinity,
                            ease: 'easeInOut'
                        },
                        style: {
                            bottom: '10%',
                            right: '10%'
                        }
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/LandingPage.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/LandingPage.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 text-center px-4 md:px-8 max-w-4xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.8
                        },
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-5xl md:text-7xl font-bold bg-gradient-to-r from-warmGold to-warmPeach bg-clip-text text-transparent",
                                children: hero.name
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/LandingPage.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl md:text-2xl text-gray-300",
                                children: hero.tagline
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/LandingPage.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed",
                                children: hero.description
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/LandingPage.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/LandingPage.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.8,
                            delay: 0.3
                        },
                        className: "flex flex-col sm:flex-row gap-4 justify-center mt-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: hero.primaryCta.href,
                                className: "px-8 py-3 bg-warmGold text-warmDark font-semibold rounded hover:bg-warmOrange transition duration-300",
                                children: hero.primaryCta.label
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/LandingPage.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: hero.secondaryCta.href,
                                className: "px-8 py-3 border-2 border-warmGold text-warmGold font-semibold rounded hover:bg-warmGold hover:text-warmDark transition duration-300",
                                children: hero.secondaryCta.label
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/LandingPage.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/LandingPage.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        animate: shouldReduceMotion ? undefined : {
                            y: [
                                0,
                                10,
                                0
                            ]
                        },
                        transition: shouldReduceMotion ? undefined : {
                            duration: 2,
                            repeat: Infinity
                        },
                        className: "absolute bottom-8 left-1/2 transform -translate-x-1/2 text-warmGold",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-6 h-6",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M19 14l-7 7m0 0l-7-7m7 7V3"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/LandingPage.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/LandingPage.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/LandingPage.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/LandingPage.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/LandingPage.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(LandingPage, "C9xMdslg1Z8O8dPJqeHy1pZYGWc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c1 = LandingPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "HeroScene");
__turbopack_context__.k.register(_c1, "LandingPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_Needed%20Things_StephaniePersonalWebsite_personal-website_src_06ooip3._.js.map