#!/usr/bin/env node

const chalk = require('chalk');

const assessment = {
    "agent": {
        "name": "Charles Benedict",
        "title": "Concierge Agent & Infrastructure Operator",
        "contact": {
            "phone": "+17143139220",
            "email": "pushingP@pushingcap.com"
        },
        "boss": "Emmanuel 'Manny' Haddad (CEO, +19497064604)"
    },
    "company": {
        "name": "Pushing Capital",
        "description": "Automotive services, lending, and asset recovery company.",
        "location": "Orange County, CA",
        "gcp_project": "brain-481809"
    },
    "key_personnel": [
        { "name": "Manny Haddad", "role": "CEO" },
        { "name": "Dmitry Karabanov", "role": "Tech" },
        { "name": "David Montrenes", "role": "Operations" },
        { "name": "Ana Elsa Rojas", "role": "Finance" },
        { "name": "Antigravity", "role": "Partner AI Agent (Mac Studio)" }
    ],
    "local_machine": {
        "type": "MacBook Pro",
        "cpu": "Intel Core i9-9880H @ 2.30GHz (8-core)",
        "ram": "16 GB",
        "os": "macOS 26.3",
        "user": "Charles",
        "ip": "192.168.4.107"
    },
    "infrastructure": {
        "gce_vms": [
            "pc-sovereign-core",
            "pc-pipeline-vm",
            "pc-platform-server",
            "pc-orchestrator-vm",
            "pc-memory-vm",
            "pc-intel-vm"
        ],
        "cloud_run_services": 45,
        "bigquery_datasets": 33,
        "local_db": "PostgreSQL (charles_memory), ChromaDB (6 collections)",
        "control_plane": "VertexPrime on localhost:9001"
    },
    "doctrines": [
        "Phone-First",
        "VM-First",
        "Native UI",
        "Agentic Memory",
        "Golden Record (BQ pc_gold)",
        ".psec Vault"
    ]
};

const printSection = (title, data) => {
    console.log(chalk.bold.blue(`\n--- ${title.toUpperCase()} ---`));
    if (Array.isArray(data)) {
        data.forEach(item => {
            if (typeof item === 'object') {
                console.log(chalk.green(`  - ${item.name}:`), chalk.white(item.role));
            } else {
                console.log(chalk.white(`  - ${item}`));
            }
        });
    } else if (typeof data === 'object') {
        for (const key in data) {
            const label = key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
            if (typeof data[key] === 'object' && data[key] !== null) {
                console.log(chalk.green(`${label}:`));
                for (const subKey in data[key]) {
                    const subLabel = subKey.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
                    console.log(chalk.white(`  ${subLabel}: ${data[key][subKey]}`));
                }
            } else {
                 console.log(chalk.green(`${label}:`), chalk.white(data[key]));
            }
        }
    }
};

console.log(chalk.bold.yellow('===== PUSHING CAPITAL - OPERATIONAL ASSESSMENT ====='));
printSection('Agent Profile', assessment.agent);
printSection('Company Overview', assessment.company);
printSection('Key Personnel', assessment.key_personnel);
printSection('Local Machine', assessment.local_machine);
printSection('Core Infrastructure', assessment.infrastructure);
printSection('Core Doctrines', assessment.doctrines);
console.log(chalk.bold.yellow('\n================ END OF ASSESSMENT ================='));
