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
                    sh 'docker build -t tictactripFront .'

                }
            }
        }
        
        stage('Deploy') {
            steps {
                script {
                    sh 'docker stop frontend'
                    sh 'docker rm frontend'
                    sh 'docker run -d -p 80:80 --name frontend tictactripFront'


                }
            }
        }
    }
    

}
