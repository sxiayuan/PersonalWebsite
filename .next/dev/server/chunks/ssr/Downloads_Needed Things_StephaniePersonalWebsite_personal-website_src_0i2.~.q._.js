module.exports = [
"[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/data/siteContent.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/Navigation.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$src$2f$data$2f$siteContent$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/data/siteContent.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function Navigation() {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const navigationItems = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$src$2f$data$2f$siteContent$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SITE_CONTENT"].navigation;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-warmDark to-transparent",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center h-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex space-x-8",
                            children: navigationItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsOpen(!isOpen),
                                className: "text-gray-300 hover:text-warmGold transition",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:hidden pb-4 space-y-2",
                    children: navigationItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
}),
"[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/LoadingScreen.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoadingScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
function LoadingScreen() {
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setTimeout(()=>setIsLoading(false), 3000);
        return ()=>clearTimeout(timer);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "fixed inset-0 bg-gradient-to-b from-warmDark via-gray-900 to-warmDark flex items-center justify-center z-50",
        exit: {
            opacity: 0
        },
        transition: {
            duration: 0.8
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                        delay: 0.2
                    },
                    className: "mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl md:text-6xl font-bold text-warmGold mb-2",
                            children: "Stephanie Xia"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/LoadingScreen.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-gray-400",
                            children: "memories loading…"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/LoadingScreen.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/LoadingScreen.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "w-32 h-1 bg-gray-700 rounded-full overflow-hidden mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "h-full bg-gradient-to-r from-warmGold to-warmOrange",
                        initial: {
                            width: '0%'
                        },
                        animate: {
                            width: '100%'
                        },
                        transition: {
                            duration: 2.5,
                            ease: 'easeInOut'
                        }
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/LoadingScreen.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/LoadingScreen.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-12 space-y-2",
                    children: [
                        ...Array(3)
                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "w-2 h-2 bg-warmGold rounded-full mx-auto",
                            animate: {
                                y: [
                                    0,
                                    -10,
                                    0
                                ],
                                opacity: [
                                    0.3,
                                    1,
                                    0.3
                                ]
                            },
                            transition: {
                                duration: 1.5,
                                delay: i * 0.2,
                                repeat: Infinity
                            }
                        }, i, false, {
                            fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/LoadingScreen.tsx",
                            lineNumber: 47,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/LoadingScreen.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/LoadingScreen.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/LoadingScreen.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/LandingPage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LandingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function LandingPage() {
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: containerRef,
        className: "relative w-full h-screen flex items-center justify-center bg-gradient-to-b from-warmDark via-gray-900 to-warmDark overflow-hidden pt-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute w-96 h-96 bg-warmGold rounded-full filter blur-3xl opacity-20",
                        animate: {
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
                        transition: {
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
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute w-96 h-96 bg-warmOrange rounded-full filter blur-3xl opacity-10",
                        animate: {
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
                        transition: {
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
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/LandingPage.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 text-center px-4 md:px-8 max-w-4xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-5xl md:text-7xl font-bold bg-gradient-to-r from-warmGold to-warmPeach bg-clip-text text-transparent",
                                children: "Stephanie Xia"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/LandingPage.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl md:text-2xl text-gray-400",
                                children: "Engineer • Builder • Creator"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/LandingPage.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed",
                                children: "Exploring growth through creative engineering. This is a cinematic journey through memories, projects, and evolving identity."
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/LandingPage.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/LandingPage.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#me",
                                className: "px-8 py-3 bg-warmGold text-warmDark font-semibold rounded hover:bg-warmOrange transition duration-300",
                                children: "Explore"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/LandingPage.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#contact",
                                className: "px-8 py-3 border-2 border-warmGold text-warmGold font-semibold rounded hover:bg-warmGold hover:text-warmDark transition duration-300",
                                children: "Get in Touch"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/LandingPage.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/LandingPage.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        animate: {
                            y: [
                                0,
                                10,
                                0
                            ]
                        },
                        transition: {
                            duration: 2,
                            repeat: Infinity
                        },
                        className: "absolute bottom-8 left-1/2 transform -translate-x-1/2 text-warmGold",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-6 h-6",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M19 14l-7 7m0 0l-7-7m7 7V3"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/LandingPage.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/LandingPage.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/LandingPage.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/LandingPage.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/LandingPage.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/Me.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MeSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$src$2f$data$2f$siteContent$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/data/siteContent.ts [app-ssr] (ecmascript)");
;
;
function MeSection() {
    const { title, intro, points } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$src$2f$data$2f$siteContent$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SITE_CONTENT"].sections.me;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "me",
        className: "min-h-screen w-full bg-gradient-to-b from-warmDark to-gray-900 flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            className: "max-w-4xl mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-5xl md:text-6xl font-bold text-warmGold mb-8",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/Me.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl text-gray-300 leading-relaxed",
                    children: intro
                }, void 0, false, {
                    fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/Me.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "list-disc list-inside mt-6 space-y-2 text-lg text-gray-400",
                    children: points.map((point)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: point
                        }, point, false, {
                            fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/Me.tsx",
                            lineNumber: 13,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/Me.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/Me.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/Me.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/Summers.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SummersSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$src$2f$data$2f$siteContent$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/data/siteContent.ts [app-ssr] (ecmascript)");
;
;
function SummersSection() {
    const { title, intro, points } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$src$2f$data$2f$siteContent$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SITE_CONTENT"].sections.summers;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "summers",
        className: "min-h-screen w-full bg-gradient-to-b from-gray-900 to-warmDark flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            className: "max-w-4xl mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-5xl md:text-6xl font-bold text-warmGold mb-8",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/Summers.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl text-gray-300 leading-relaxed",
                    children: intro
                }, void 0, false, {
                    fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/Summers.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "list-disc list-inside mt-6 space-y-2 text-lg text-gray-400",
                    children: points.map((point)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: point
                        }, point, false, {
                            fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/Summers.tsx",
                            lineNumber: 13,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/Summers.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/Summers.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/Summers.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/Projects.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$src$2f$data$2f$siteContent$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/data/siteContent.ts [app-ssr] (ecmascript)");
;
;
function ProjectsSection() {
    const { title, intro, points } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$src$2f$data$2f$siteContent$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SITE_CONTENT"].sections.projects;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "projects",
        className: "min-h-screen w-full bg-gradient-to-b from-warmDark to-gray-900 flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            className: "max-w-4xl mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-5xl md:text-6xl font-bold text-warmGold mb-8",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/Projects.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl text-gray-300 leading-relaxed",
                    children: intro
                }, void 0, false, {
                    fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/Projects.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "list-disc list-inside mt-6 space-y-2 text-lg text-gray-400",
                    children: points.map((point)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: point
                        }, point, false, {
                            fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/Projects.tsx",
                            lineNumber: 13,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/Projects.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/Projects.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/Projects.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/Experience.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExperienceSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$src$2f$data$2f$siteContent$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/data/siteContent.ts [app-ssr] (ecmascript)");
;
;
function ExperienceSection() {
    const { title, intro, points } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$src$2f$data$2f$siteContent$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SITE_CONTENT"].sections.experience;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "experience",
        className: "min-h-screen w-full bg-gradient-to-b from-gray-900 to-warmDark flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            className: "max-w-4xl mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-5xl md:text-6xl font-bold text-warmGold mb-8",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/Experience.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl text-gray-300 leading-relaxed",
                    children: intro
                }, void 0, false, {
                    fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/Experience.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "list-disc list-inside mt-6 space-y-2 text-lg text-gray-400",
                    children: points.map((point)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: point
                        }, point, false, {
                            fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/Experience.tsx",
                            lineNumber: 13,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/Experience.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/Experience.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/Experience.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/Fashion.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FashionSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$src$2f$data$2f$siteContent$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/data/siteContent.ts [app-ssr] (ecmascript)");
;
;
function FashionSection() {
    const { title, intro, points } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$src$2f$data$2f$siteContent$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SITE_CONTENT"].sections.fashion;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "fashionista",
        className: "min-h-screen w-full bg-gradient-to-b from-warmDark to-gray-900 flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            className: "max-w-4xl mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-5xl md:text-6xl font-bold text-warmGold mb-8",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/Fashion.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl text-gray-300 leading-relaxed",
                    children: intro
                }, void 0, false, {
                    fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/Fashion.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "list-disc list-inside mt-6 space-y-2 text-lg text-gray-400",
                    children: points.map((point)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: point
                        }, point, false, {
                            fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/Fashion.tsx",
                            lineNumber: 13,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/Fashion.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/Fashion.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/Fashion.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/Contact.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$src$2f$data$2f$siteContent$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/data/siteContent.ts [app-ssr] (ecmascript)");
;
;
function ContactSection() {
    const { title, intro } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$src$2f$data$2f$siteContent$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SITE_CONTENT"].sections.contact;
    const { socialLinks } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$src$2f$data$2f$siteContent$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SITE_CONTENT"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: "min-h-screen w-full bg-gradient-to-b from-gray-900 to-warmDark flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            className: "max-w-4xl mx-auto px-4 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-5xl md:text-6xl font-bold text-warmGold mb-8",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/Contact.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl text-gray-300 mb-12",
                    children: intro
                }, void 0, false, {
                    fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/Contact.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center gap-8 flex-wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: `mailto:${socialLinks.email}`,
                            className: "px-6 py-3 border-2 border-warmGold text-warmGold rounded hover:bg-warmGold hover:text-warmDark transition",
                            children: "Email"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/Contact.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: socialLinks.linkedin,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "px-6 py-3 border-2 border-warmGold text-warmGold rounded hover:bg-warmGold hover:text-warmDark transition",
                            children: "LinkedIn"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/Contact.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: socialLinks.github,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "px-6 py-3 border-2 border-warmGold text-warmGold rounded hover:bg-warmGold hover:text-warmDark transition",
                            children: "GitHub"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/Contact.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: socialLinks.resume,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "px-6 py-3 border-2 border-warmGold text-warmGold rounded hover:bg-warmGold hover:text-warmDark transition",
                            children: "Resume"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/Contact.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/Contact.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/Contact.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/Contact.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$src$2f$components$2f$Navigation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/Navigation.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$src$2f$components$2f$LoadingScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/LoadingScreen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$src$2f$components$2f$sections$2f$LandingPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/LandingPage.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$src$2f$components$2f$sections$2f$Me$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/Me.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$src$2f$components$2f$sections$2f$Summers$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/Summers.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$src$2f$components$2f$sections$2f$Projects$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/Projects.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$src$2f$components$2f$sections$2f$Experience$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/Experience.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$src$2f$components$2f$sections$2f$Fashion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/Fashion.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$src$2f$components$2f$sections$2f$Contact$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/components/sections/Contact.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
function Home() {
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Simulate loading time - remove or adjust based on your needs
        const timer = setTimeout(()=>{
            setIsLoading(false);
        }, 2000);
        return ()=>clearTimeout(timer);
    }, []);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$src$2f$components$2f$LoadingScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/app/page.tsx",
            lineNumber: 27,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$src$2f$components$2f$Navigation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/app/page.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$src$2f$components$2f$sections$2f$LandingPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/app/page.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$src$2f$components$2f$sections$2f$Me$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/app/page.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$src$2f$components$2f$sections$2f$Summers$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/app/page.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$src$2f$components$2f$sections$2f$Projects$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/app/page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$src$2f$components$2f$sections$2f$Experience$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/app/page.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$src$2f$components$2f$sections$2f$Fashion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/app/page.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Needed__Things$2f$StephaniePersonalWebsite$2f$personal$2d$website$2f$src$2f$components$2f$sections$2f$Contact$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/app/page.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/Needed Things/StephaniePersonalWebsite/personal-website/src/app/page.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Downloads_Needed%20Things_StephaniePersonalWebsite_personal-website_src_0i2.~.q._.js.map