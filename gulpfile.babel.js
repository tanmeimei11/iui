import fs from 'fs'
import gulp from 'gulp'
import bump from 'gulp-bump'
import semver from 'semver'
import { exec } from 'child_process'
let newVersion
// major: 1.0.0
// minor: 0.1.0
// patch: 0.0.2
let versionType = 'patch' 
let run = (command, cb) => { exec(command, (err) => { if (err) return cb(err); cb() }) } 

gulp.task('bump', () => {
  let packageJson = () => { return JSON.parse( fs.readFileSync('./package.json', 'utf8')) }
  let json = packageJson()    
  newVersion = semver.inc(json.version, versionType)
  gulp.src('./package.json')
    .pipe(bump({ version: newVersion, type: versionType }))
    .pipe(gulp.dest('./'))
})

gulp.task('git:tag', ['bump'], (cb) => {
  run(`git tag -a ${newVersion} -m "Tagging ${newVersion}"`, cb)   
})

gulp.task('git:push:tags', ['git:tag'], (cb) => {
  run('git push --tags', cb) 
})

gulp.task('npm:publish', ['git:push:tags'], (cb) => {
  // run('npm publish', cb) 
})

gulp.task('version:minor', (cb) => { versionType = 'minor' })
gulp.task('version:major', (cb) => { versionType = 'major' })
gulp.task('npm:publish:minor', ['version:minor', 'git:push:tags'])
gulp.task('npm:publish:major', ['version:major', 'git:push:tags'])

// export default build
