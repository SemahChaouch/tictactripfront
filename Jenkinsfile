pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                script {
                    // Checkout code from version control
                    git 'https://github.com/SemahChaouch/tictactripfront'
                    git branch: 'master', url: 'https://github.com/SemahChaouch/tictactripfront'
                    sh 'npm install'
                    sh 'docker build -t tictactripfront .'

                }
            }
        }
        
        stage('Deploy') {
            steps {
                script {
                    sh 'docker stop frontend'
                    sh 'docker rm frontend'
                    sh 'docker run -d -p 3006:3006 --name frontend tictactripfront'


                }
            }
        }
    }
    

}
