pipeline {
    agent any

    tools {
        nodejs 'Node-23' // The name must match your Jenkins configuration
    }

    stages {
            stage('Install dependencies') {
                steps {
                    dir("my-app") {
                         echo 'Installing dependecies...'
                        sh 'rm -rf node_modules package-lock.json && npm install'
                    }
                }
            }

            stage('Static Analysis with Lint') {
                steps {
                    dir("my-app") {
                        sh 'npx eslint . --format junit -o eslint.xml || true'

                        recordIssues(
                            tools: [
                                esLint(pattern: 'eslint.xml')
                            ],
                            qualityGates: [
                                [threshold: 1, type: 'TOTAL_HIGH', unstable: true]
                            ],
                            healthy: 0,
                            unhealthy: 100,
                            minimumSeverity: 'HIGH'
                        )
                    }
                }
                

            }

            stage('Test') {
                steps {
                    dir("my-app") {
                        sh 'npm test'
                    }
                }            
            }

            stage('Run Sonarqube') {
                environment {
                    scannerHome = tool 'woc_sonar'
                }
                steps {
                    withSonarQubeEnv(credentialsId: 'lil-sonar-credentials', installationName: 'woc sonar') {
                        sh "${scannerHome}/bin/sonar-scanner"
                    }
                }
            }

            stage('Release') {
                steps {
                    echo 'this is my release stage'
                }
            }
    }
} 